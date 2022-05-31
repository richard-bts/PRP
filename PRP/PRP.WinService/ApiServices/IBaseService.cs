using PRP.WinService.Model;
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
    }
}
