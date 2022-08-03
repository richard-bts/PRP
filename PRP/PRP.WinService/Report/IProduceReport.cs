using PRP.Domain.Models;
using PRP.Domain.Models.Dto;
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
        public bool GenerateAllReportsFor(GetPartnerDto pd);
        public bool GeneratePODReport(GetPartnerDto pd);
        public bool GenerateScanReport(GetPartnerDto pd);
        public bool GenerateExceptionReport(GetPartnerDto pd);
    }
}
