using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
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
                Url =  $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}api/report/GetPODReport?inputDate={inputDate.Year}-{inputDate.Month}-{inputDate.Day}&clientID={clientID}"
            });           
        }
        public async Task<ResponseDto?> GetScanReport(DateTime inputDate, int clientID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = inputDate,
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}api/report/GetScanReport?inputDate={inputDate.Year}-{inputDate.Month}-{inputDate.Day}&clientID={clientID}"
            });
        }
        public async Task<ResponseDto?> GetExceptionReport(DateTime inputDate, int clientID)
        {
            return await this.SendAsync(new ApiRequest()
            {
                Data = inputDate,
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}api/report/GetExceptionReport?inputDate={inputDate.Year}-{inputDate.Month}-{inputDate.Day}&clientID={clientID}"
            });
        }
        public async Task<PartnerResponseDto<GetPartnerDto>?> GetPartners()
        {
            return await this.SendAsync1(new ApiRequest()
            {
                Url = $"{_Configuration.GetSection("ServiceUrl:PRP.Service.Api").Value}partners"
            });

        }
       
        #endregion
    }
}
