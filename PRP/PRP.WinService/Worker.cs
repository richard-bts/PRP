using Newtonsoft.Json;
using PRP.WinService;
using PRP.WinService.ApiServices;

using PRP.WinService.Report;
using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
using Serilog;

namespace PRP.WinService
{
    public class Worker : BackgroundService
    {
        #region Constructor And Member Variables
        private readonly ILogger<Worker> _logger;
        private readonly IProduceReport _produceReport;
        private readonly IPRPService _PRPService;
        private readonly IAuthorization _authorization;

        public System.Threading.Thread emailSender = null;
        public Worker(ILogger<Worker> logger, IProduceReport produceReport, IPRPService PRPService, IAuthorization authorization)
        {
            _logger = logger;
            _produceReport = produceReport;
            _PRPService = PRPService;
            _authorization = authorization;
        }
        private readonly int midnighth = 12;
        private readonly int min = 00;
        private readonly int nighth = 23;
        private DateTime DateNow = DateTime.Now;
        private List<(string, DateTime)> Token;

        #endregion
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            string temp = null;

            while (!stoppingToken.IsCancellationRequested)
            {
                Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");
            bool StopPartDay = false;
                _authorization.CheckAutorizatio();

               
                List<PartnerDetail>? PartnersList = new();
                try
                {
                    var response = await _PRPService.GetPartners();
                    if (response is null | response.count == 0)
                    {
                        Log.Logger.ForContext("Component", "PRP.WinService").Warning("{Message}", $"API Return is Null !!!!!");
                        StopPartDay = true;
                        await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
                    }
                
                while (!StopPartDay)
                {
                    try
                    {
                        DateNow = DateTime.Now;
                        foreach (var partner in response.data)
                        {
                            foreach (var test in partner.partner_emails)
                            {

                                if ((partner.partner_report_time.Year <= DateNow.Year) & (partner.partner_report_time.Month <= DateNow.Month) & (partner.partner_report_time.Date <= DateNow.Date) & (partner.partner_report_time.Hour == DateNow.Hour) & (partner.partner_report_time.Minute == DateNow.Minute) & partner.partner_active == 1)
                                {
                                    if ((temp == null) | temp != test.partner_email)
                                    {
                                        temp = test.partner_email;
                                        @_produceReport.GenerateAllReportsFor(partner);
                                        Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is Run and pass check ...");
                                    }
                                }
                            }
                        }
                        await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);

                        if ((DateTime.Now.Hour == midnighth) && (DateTime.Now.Minute == min))
                        {
                            StopPartDay = true;
                            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Update data ...");
                            temp = null;
                        }
                        if ((DateTime.Now.Hour == nighth) && (DateTime.Now.Minute == min))
                        {
                            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Update data ...");
                            StopPartDay = true;
                            temp = null;
                        }
                    }
                    catch (Exception ex)
                    {
                        Log.Logger.ForContext("Component", "PRP.WinService").Warning("{Message}", $"Update data ...{ex.Message}");
                        StopPartDay = true;
                    }


                }
                    
                }
                catch (Exception ex)
                {
                    Log.Logger.ForContext("Component", "PRP.WinService").Warning("{Message}", $"Update data for API ...{ex.Message}");
                    StopPartDay = true;
                }
            }
           
            //while (!stoppingToken.IsCancellationRequested)
            //{
            //    Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is Pull Data ...");
            //    content = String.Empty;
            //    PartnersList = new();
            //    response = _PRPService.GetPartners();
            //    //if (response != null && response.Result != null && response.Result.Result != null)
            //    //    content = Convert.ToString(response.Result.Result);

            //    //if (response != null && response.Result != null && !string.IsNullOrEmpty(content))
            //    //{
            //    //    PartnersList = JsonConvert.DeserializeObject<List<Partner>>(content);
            //    //}


            //    bool StopPartDay = false;
            //    //while (!StopPartDay)
            //    //{
            //    //    foreach (var a in PartnersList)
            //    //    {
            //    //        if ((a.ReportTime.Value.Hour == DateTime.Now.Hour) & (a.ReportTime.Value.Minute == DateTime.Now.Minute) & (a.ReportTime.Value.Day <= DateTime.Now.Day) & (a.ReportTime.Value.Month <= DateTime.Now.Month) & (a.ReportTime.Value.Year <= DateTime.Now.Year))
            //    //        {
            //    //            _produceReport.GenerateAllReportsFor(a);
            //    //            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is Sending email ...");
            //    //        }
            //    //    }
            //    //    await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
            //    //    if ((DateTime.Now.Hour == midnighth) && (DateTime.Now.Minute == min))
            //    //    {
            //    //        StopPartDay = true;
            //    //        Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Update data ...");
            //    //    }
            //    //    if ((DateTime.Now.Hour == nighth) && (DateTime.Now.Minute == min))
            //    //    {
            //    //        Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Update data ...");
            //    //        StopPartDay = true;
            //    //    }
            //    //}
            //}

        }





    }
}