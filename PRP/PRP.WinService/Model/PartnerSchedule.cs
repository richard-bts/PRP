using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.Model
{
    public class PartnerSchedule
    {
        public int ClientID { get; set; }
        public string? Name { get; set; }
        public int ReportType { get; set; }
        public string? EmailList { get; set; }
        public DateTime StartDate { get; set; }
        public TimeSpan ExecutionTime { get; set; }
    }
}
