using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.ApiServices
{
    internal interface IBaseService: IDisposable
    {
        ResponseDto? responseModel { get; set; }
        Task<ResponseDto?> SendAsync(ApiRequest apiRequest);
        Task<PartnerResponseDto<GetPartnerDto>?> SendAsync1(ApiRequest apiRequest);
    }
}
