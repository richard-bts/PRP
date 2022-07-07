using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.Email
{
    public interface IEmailService
    {
        public bool SendEmail(string filename, int clientID, string reportTitle);
    }
}
