using MailKit.Net.Pop3;
using MailKit.Security;
using Microsoft.Exchange.WebServices.Data;
using MimeKit;
using MimeKit.Text;
using Newtonsoft.Json;
using PRP.Domain.Models.Dto;
using PRP.WinService.ApiServices;
using PRP.WinService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.Email
{
    public class EmailService : IEmailService
    {
        #region Constructor And Member Variables
        private readonly IPRPService _PRPService;
        public string? EmailIDs { get; set; }
        public string? FileAttach { get; set; }
        public string? SMTPHost { get; set; }

        public EmailService(IPRPService PRPService)
        {
            _PRPService = PRPService;
        }
        #endregion

        #region Public Methods
        bool IEmailService.SendEmail(string filename, string reportTitle, GetPartnerDto Partner)
        {
            IConfiguration configuration = (IConfiguration)new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddEnvironmentVariables()
            .Build();


            using (var client = new MailKit.Net.Smtp.SmtpClient())
            {
                client.ServerCertificateValidationCallback += new System.Net.Security.RemoteCertificateValidationCallback(ValidateCertificate);
                client.SslProtocols = System.Security.Authentication.SslProtocols.Tls12;
               
                client.Connect(configuration.GetSection("EmailSettings:Server").Value, 465, SecureSocketOptions.Auto);
                
                client.Authenticate(configuration.GetSection("EmailSettings:User").Value, configuration.GetSection("EmailSettings:Password").Value);


                string testUser = configuration.GetSection("EmailSettings:TestUser").Value;
                string testUserEmailID = configuration.GetSection("EmailSettings:TestUserEmailID").Value;
                var mimeMessage = new MimeMessage();
                mimeMessage.Subject = $"PRP - {reportTitle} ({Partner.client_id})";
                mimeMessage.From.Add(new MailboxAddress(mimeMessage.Subject, testUserEmailID));


              if(Partner.partner_emails ==null)
                { return false; }

                
                if (Partner.partner_emails.Count() >0)
                {
                    foreach (var email in Partner.partner_emails)
                        if (email.active == 1)
                        {
                            mimeMessage.To.Add(new MailboxAddress(email.partner_email, email.partner_email));
                        }
                }

               // mimeMessage.To.Add(new MailboxAddress(testUser, testUserEmailID));
               // mimeMessage.Cc.Add(new MailboxAddress(testUser, testUserEmailID));
               // mimeMessage.Bcc.Add(new MailboxAddress(testUser, testUserEmailID));

                BodyBuilder builder = new BodyBuilder();

                builder.HtmlBody = $"<h3>Please find the attached for the report.</h3><p><h5>Report type:{reportTitle}({Partner.client_id})</h5></p>";

                builder.Attachments.Add(filename);

                mimeMessage.Body = builder.ToMessageBody(); 

                try
                {
                    client.Send(mimeMessage);
                }
                catch(Exception ex)
                {

                    Console.WriteLine(ex.Message);
                    return false;
                }
                

                mimeMessage.To.Clear();
                mimeMessage.Cc.Clear();

                List<MimeMessage?> emails = new List<MimeMessage?>();

                using (var emailPopClient = new Pop3Client() )
                {
                    emailPopClient.Connect(configuration.GetSection("EmailSettings:Server").Value, 995, true);
                    emailPopClient.AuthenticationMechanisms.Remove("XOATH2");
                    emailPopClient.Authenticate(configuration.GetSection("EmailSettings:User").Value, configuration.GetSection("EmailSettings:Password").Value);

                    for (int nCount= 0; nCount<emailPopClient.Count;nCount++)
                    {
                        var message = emailPopClient.GetMessage(nCount);
                        
                        if (message.Attachments.Count() >0)
                        {
                            foreach(MimePart attachment in message.Attachments)
                            {
                              //  Console.WriteLine(attachment.FileName);
                            }
                        }

                        //var emailMessage = new MimeMessage
                        //{
                        //    Body = new TextPart(TextFormat.Html) { Text = message.HtmlBody },
                        //    Subject = message.Subject,
                        //};
                    }
                }

                client.Disconnect(true);

            }
               
            return true;

        }
        #endregion

        #region Private Methods
        private bool ValidateCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors errors)
        {
            return true;
        }
        #endregion
    }
}