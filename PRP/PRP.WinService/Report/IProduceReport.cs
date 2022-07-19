using PRP.WinService.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.WinService.Report
{
    public interface IProduceReport
    {
        //public bool GenerateAllReports();
        public bool GenerateAllReportsFor(PartnerDetailDto pd);
        public bool GeneratePODReport(PartnerDetailDto pd);
        public bool GenerateScanReport(PartnerDetailDto pd);
        public bool GenerateExceptionReport(PartnerDetailDto pd);
    }
}
