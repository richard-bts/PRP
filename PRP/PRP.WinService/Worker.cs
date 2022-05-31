using PRP.WinService;
using PRP.WinService.Report;
using Serilog;

namespace PRP.WinService
{
    public class Worker : BackgroundService
    {
        #region Constructor And Member Variables
        private readonly ILogger<Worker> _logger;
        private readonly IProduceReport _produceReport;

        public Worker(ILogger<Worker> logger, IProduceReport produceReport)
        {
            _logger = logger;
            _produceReport = produceReport;
        }
        #endregion
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");

            stoppingToken.Register(() => _logger.LogInformation("Service is stopping."));

            while (!stoppingToken.IsCancellationRequested)
            {
                _produceReport.GenerateAllReports();
                await Task.Delay(TimeSpan.FromSeconds(5), stoppingToken);
            }

            Log.Logger.ForContext("Component", "PRP.WinService").Information("{Message}", $"Service is starting...");
        }
    }
}