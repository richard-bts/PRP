using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.Service.Domain.Models
{
    public class APITokenRespond
    {
        public string access_token { get; set; }
        public int expires_in { get; set; }
        public string token_type { get; set; }
        public string scope { get; set; }
    }

    public class APITime : IAPITime
    {
        public DateTime Created { get; set; }
        public void addTimetoExpToken(DateTime stemp)
        {
            Created = stemp;

        }
        public bool CheckTimetoken(DateTime stemp)
        {
            if (Created <= DateTime.Now)
            {
                return false;
            }
            return true;
        }
    }
}
