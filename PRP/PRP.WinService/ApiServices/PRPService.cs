using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PRP.WinService.Model;
using PRP.WinService;
using Newtonsoft.Json;

namespace PRP.WinService.ApiServices
{
    public class PRPService : BaseService, IPRPService
    {
        #region Constructor And Member Variables
        private readonly IConfiguration _Configuration;

        public PRPService()
        {
            _Configuration = (IConfiguration)new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                            .AddEnvironmentVariables()
                            .Build();
        }
        #endregion

        #region Public Methods
        public async Task<ResponseDto?> GetPODReport(DateTime inputDate, int clientID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = inputDate,
                Url =  $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}GetPODReport?inputDate={inputDate}&clientID={clientID}"
            });           
        }
        public async Task<ResponseDto?> GetScanReport(DateTime inputDate, int clientID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = inputDate,
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}GetScanReport?inputDate={inputDate}&clientID={clientID}"
            });
        }
        public async Task<ResponseDto?> GetExceptionReport(DateTime inputDate, int clientID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = inputDate,
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}GetExceptionReport?inputDate={inputDate}&clientID={clientID}"
            });
        }
        public async Task<ResponseDto?> GetPartners()
        {
            return await this.SendAsync(new ApiRequest()
            {
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}GetPartners"
            });

        }
        public async Task<ResponseDto?> GetPartnerEmails(int partnerID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = partnerID,
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}GetPartnerEmails?partnerId={partnerID}"
            });

        }
        #endregion
    }
}
