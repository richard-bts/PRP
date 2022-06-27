using Newtonsoft.Json;
using PRP.WinService;
using PRP.WinService.ApiServices;
using PRP.WinService.Model;
using PRP.WinService.Report;
using Serilog;

namespace PRP.WinService
{
    public class Worker : BackgroundService
    {
        #region Constructor And Member Variables
        private readonly ILogger<Worker> _logger;
        private readonly IProduceReport _produceReport;
        private readonly IPRPService _PRPService;

        public System.Threading.Thread emailSender = null;
        public Worker(ILogger<Worker> logger, IProduceReport produceReport, IPRPService PRPService)
        {
            _logger = logger;
            _produceReport = produceReport;
            _PRPService= PRPService;
        }

       
        #endregion
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
           // IConfiguration configuration = (IConfiguration)new ConfigurationBuilder()
           //.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
           //.AddEnvironmentVariables()
           //.Build();
          
            //TimeOnly Start = new TimeOnly(Convert.ToInt32(configuration.GetSection("EmailSettings:HowOftenrun").Value) , 00);
            

            //Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");

            //stoppingToken.Register(() => _logger.LogInformation("Service is stopping."));

            //while (!stoppingToken.IsCancellationRequested)
            //{
            //     if (Start.Hour == DateTime.Now.Hour)
            //    {
            //        _produceReport.GenerateAllReports();
            //         await Task.Delay(TimeSpan.FromHours(24));
            //    }
            //await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);

            //}

            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");



            List<PartnerDetailDto>? PartnersList = new();

            var response = _PRPService.GetPartners();

            string? content = String.Empty;

            if (response != null && response.Result != null && response.Result.Result != null)
                content = Convert.ToString(response.Result.Result);

            if (response != null && response.Result != null && !string.IsNullOrEmpty(content))
            {
                PartnersList = JsonConvert.DeserializeObject<List<PartnerDetailDto>>(content);
            }

            while (!stoppingToken.IsCancellationRequested)
            {
                foreach (var a in PartnersList)
                    if ((a.ReportTime.Value.Hour == DateTime.Now.Hour) & (a.ReportTime.Value.Minute == DateTime.Now.Minute) & (a.ReportTime < DateTime.Now))
                    {
                        _produceReport.GenerateAllReportsFor(a);

                    }
                await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
            }



            //Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");

            //stoppingToken.Register(() => _logger.LogInformation("Service is stopping."));

            //while (!stoppingToken.IsCancellationRequested)
            //{
            //    _produceReport.GenerateAllReports();
            //    await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
            //}

            //Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");
        }

       



    }
}