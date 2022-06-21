using Microsoft.Extensions.Logging;
using PRP.WinService.ApiServices;
using PRP.WinService.Email;
using PRP.WinService.Model;
using PRP.WinService.Report;
using System.Collections.Generic;
using Xunit;

namespace PRP.WinService.Tests
{
    public class WinServiceTest
    {
        IProduceReport _produceReport;
        IPRPService _prpService;
        IEmailService _emailService;
        ILogger<ProduceReport> _logger;

        public WinServiceTest()
        {
          _prpService = new PRPService();
          _emailService = new EmailService(_prpService);

          var loggerFactory = LoggerFactory.Create(
                       builder => builder
                                   .AddConsole()
                                   .AddDebug()
                                   .SetMinimumLevel(LogLevel.Debug)
                   );

            _logger = loggerFactory.CreateLogger<ProduceReport>();
            _produceReport = new ProduceReport(_prpService, _emailService, _logger);
        }

        [Fact]
        public void GeneratePODReport_SendEmail_Test()
        {
            bool bResult = false;
                bResult = _produceReport.GeneratePODReport(new PartnerDetailDto { });
            Assert.True(bResult);
        }

        [Fact]
        public void GenerateScanReport_SendEmail_Test()
        {
            bool bResult = _produceReport.GenerateScanReport(new PartnerDetailDto { });
            Assert.True(bResult);
        }

        [Fact]
        public void GenerateExceptionReport_SendEmail_Test()
        {
            bool bResult = _produceReport.GenerateExceptionReport(new PartnerDetailDto { });
            Assert.True(bResult);
        }
        [Fact]
        public void GenerateAllReports_SendEmail_Test()
        {
            bool bResult = _produceReport.GenerateAllReports();
            Assert.True(bResult);
        }
    }
}