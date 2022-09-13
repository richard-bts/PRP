using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace PRP.WinService.ApiServices
{
    public class BaseService : IBaseService
    {
        #region Constructor And Member Variables
        public ResponseDto? responseModel { get; set; }
        public HttpClient _httpClient { get; set; }
        public Authorization _authorization { get; set; }

        public BaseService() 
        {
            this.responseModel = new ResponseDto();
            this._httpClient = new HttpClient();
            
        }
        #endregion

        #region Public Methods
        public void Dispose()
        {
            GC.SuppressFinalize(true);
        }
        

         public async Task<PartnerResponseDto<GetPartnerDto>?> SendAsync1(ApiRequest apiRequest)
        {
            try
            {
                
                HttpRequestMessage message = new HttpRequestMessage();
                
                message.Headers.Add("Accept", "application/jason");
                string ap = Authorization.TokenKey;
                message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", ap);
                if (apiRequest.Url != null)
                    message.RequestUri = new Uri(apiRequest.Url);
                
                _httpClient.DefaultRequestHeaders.Clear();

                if (apiRequest.Data != null)
                {
                    message.Content = new StringContent(
                        JsonConvert.SerializeObject(new { inputDate = apiRequest.Data }),
                        Encoding.UTF8,
                        "application/json");
                    message.Method = HttpMethod.Get;

                }
                HttpResponseMessage? apiResponse = null;
                PartnerResponseDto<GetPartnerDto>? apiReponseDto = null;
                
                apiResponse = await _httpClient.SendAsync(message);

                if (apiResponse != null)
                {
                    var apiContent = await apiResponse.Content.ReadAsStringAsync();
                    apiReponseDto = JsonConvert.DeserializeObject<PartnerResponseDto<GetPartnerDto>>(apiContent);
                }
                return apiReponseDto;
            }
            catch (Exception ex)
            {

                var dto = new ResponseDto()
                {
                    DisplayMessage = "Error",
                    ErrorMessages = new List<string> { ex.Message.ToString() }

                };
                PartnerResponseDto<GetPartnerDto>? apiReponseDto = null;
                var res = JsonConvert.SerializeObject(dto);
                apiReponseDto = JsonConvert.DeserializeObject<PartnerResponseDto<GetPartnerDto>?>(res);
                return apiReponseDto;
            }
        }
        public async Task<ResponseDto?> SendAsync(ApiRequest apiRequest)
        {
            try
            {
                HttpRequestMessage message = new HttpRequestMessage();
                message.Headers.Add("Accept", "application/jason");
                Authorization authorization = new Authorization();
                authorization.CheckAutorizatio();
                
                string ap = Authorization.TokenKey;
                
                message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", ap);
                if (apiRequest.Url != null)  
                    message.RequestUri = new Uri(apiRequest.Url);

                _httpClient.DefaultRequestHeaders.Clear();

                if (apiRequest.Data !=null)
                {
                    message.Content = new StringContent(
                        JsonConvert.SerializeObject(new { inputDate = apiRequest.Data }),
                        Encoding.UTF8,
                        "application/json");
                    message.Method = HttpMethod.Get;

                }
                HttpResponseMessage? apiResponse = null;
                ResponseDto? apiReponseDto = null;

                apiResponse = await _httpClient.SendAsync(message);

                if (apiResponse != null)
                {                 
                    var apiContent = await apiResponse.Content.ReadAsStringAsync();
                    apiReponseDto = JsonConvert.DeserializeObject<ResponseDto?>(apiContent);
                }
                return apiReponseDto;
            }
            catch (Exception ex)
            {
                var dto = new ResponseDto()
                {
                    DisplayMessage = "Error",
                    ErrorMessages = new List<string> { ex.Message.ToString() }

                };
                ResponseDto? apiReponseDto = null;
                var res = JsonConvert.SerializeObject(dto);
                apiReponseDto = JsonConvert.DeserializeObject<ResponseDto?>(res);
                return apiReponseDto;
            }            
        }
        #endregion
    }
}
