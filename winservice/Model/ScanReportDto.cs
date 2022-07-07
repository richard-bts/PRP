using System.ComponentModel.DataAnnotations;

namespace PRP.WinService.Model
{
    public class ScanReportDto
    {
        public int clientID { get; set; }
        [Key]
        public decimal? OrderTrackingID { get; set; }
        public string? ClientRefNo { get; set; }
        public string? SCANcode { get; set; }
        public string? SCANlocation { get; set; }
        public DateTime? aTimeStamp { get; set; }
    }
}
