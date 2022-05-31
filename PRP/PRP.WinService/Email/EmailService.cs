using MailKit.Security;
using MimeKit;
using MimeKit.Text;
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
        public string? EmailIDs { get; set; }
        public string? FileAttach { get; set; }
        public string? SMTPHost { get; set; }

        public EmailService()
        {

        }
        #endregion

        #region Public Methods
        bool IEmailService.SendEmail(string filename, int clientID, string reportTitle)
        {
            IConfiguration configuration = (IConfiguration)new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddEnvironmentVariables()
            .Build();


            using (var client = new MailKit.Net.Smtp.SmtpClient())
            {
                //client.ServerCertificateValidationCallback += new System.Net.Security.RemoteCertificateValidationCallback(ValidateCertificate);
                client.SslProtocols = System.Security.Authentication.SslProtocols.Tls12;
               
                client.Connect(configuration.GetSection("EmailSettings:Server").Value, 465, SecureSocketOptions.Auto);
                
                client.Authenticate(configuration.GetSection("EmailSettings:User").Value, configuration.GetSection("EmailSettings:Password").Value);

                string testUser = configuration.GetSection("EmailSettings:TestUser").Value;
                string testUserEmailID = configuration.GetSection("EmailSettings:TestUserEmailID").Value;
                var mimeMessage = new MimeMessage();
                mimeMessage.Subject = $"PRP - {reportTitle} ({clientID})";
                mimeMessage.From.Add(new MailboxAddress(mimeMessage.Subject, testUserEmailID));
                mimeMessage.To.Add(new MailboxAddress(testUser, testUserEmailID));
                mimeMessage.Cc.Add(new MailboxAddress(testUser, testUserEmailID));
                mimeMessage.Bcc.Add(new MailboxAddress(testUser, testUserEmailID));

                BodyBuilder builder = new BodyBuilder();

                builder.HtmlBody = $"<h3>Please find the attached for the report.</h3><p><h5>Report type:{reportTitle}({clientID})</h5></p>";

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