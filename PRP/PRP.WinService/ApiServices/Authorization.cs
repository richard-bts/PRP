using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
using PRP.Service.Domain.Models;
using System.Text.Json;

namespace PRP.WinService.ApiServices
{
    public interface IAuthorization
    {
        void CheckAutorizatio();
        string gettoken();
        Task<string> RenewToken(string Key, string url);
    }

    public class Authorization : IAuthorization
    {

        private readonly IConfiguration _Configuration;
        static HttpClient client = new HttpClient();
        public static string TokenKey;
        public static DateTime tokenexp;
        Task<string> token;
        public Authorization()
        {
            _Configuration = (IConfiguration)new ConfigurationBuilder()
                            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                            .AddEnvironmentVariables()
                            .Build();

        }

        public string gettoken()
        { return TokenKey; }
        public void CheckAutorizatio()
        {


            if (TokenKey is null)
            {
                token = RenewToken(_Configuration.GetSection("ApiAutorization:key").Value.ToString(), _Configuration.GetSection("ApiAutorization:url").Value);
                TokenKey = token.Result.ToString();
                tokenexp = DateTime.Now;

            }
            if (tokenexp >= DateTime.Now.AddMilliseconds(30))
            {
                TokenKey = token.Result.ToString();
                tokenexp = DateTime.Now;

            }

        }
        public async Task<string> RenewToken(string Key, string url)
        {
            string status;
            do
            {
                var client = new HttpClient();

                var data = new[]
                {
        new KeyValuePair<string, string>("client_id", "PRP.WindowsService"),
        new KeyValuePair<string, string>("client_secret", Key),
        new KeyValuePair<string, string>("grant_type", "client_credentials"),
        new KeyValuePair<string, string>("scope", "api.full"),

    };
                var a = client.PostAsync(url, new FormUrlEncodedContent(data)).Result;
                if (Convert.ToInt32(a.StatusCode) == StatusCodes.Status200OK)
                {
                    var datafromAPE = a.Content.ReadAsStringAsync().Result;
                    APITokenRespond Token = System.Text.Json.JsonSerializer.Deserialize<APITokenRespond>(Convert.ToString(datafromAPE.ToString()));
                    return Token.access_token;

                }
                else
                {
                    status = a.StatusCode.ToString();
                }

                return "ss";
            } while (status == "200");
        }


    }
}
