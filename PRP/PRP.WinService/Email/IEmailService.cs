using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PRP.Domain.Models.Dto;

namespace PRP.WinService.Email
{
    public interface IEmailService
    {
        public bool SendEmail(string filename, string reportTitle, GetPartnerDto PartnerId, DateTime dateraport);
    }
}
