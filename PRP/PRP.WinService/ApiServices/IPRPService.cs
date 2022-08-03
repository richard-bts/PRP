
using PRP.Domain.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.ApiServices
{
    public interface IPRPService
    {
        public Task<ResponseDto?> GetPODReport(DateTime inputDate, int clientID);
        public Task<ResponseDto?> GetScanReport(DateTime inputDate, int clientID);
        public Task<ResponseDto?> GetExceptionReport(DateTime inputDate, int clientID);
        public Task<PartnerResponseDto<GetPartnerDto>?> GetPartners();
       

    }
}
