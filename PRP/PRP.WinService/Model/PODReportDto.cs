using System.ComponentModel.DataAnnotations;

namespace PRP.WinService.Model
{
    public class PODReportDto
    {
        public int clientID { get; set; }
        [Key]
        public decimal OrderTrackingID { get; set; }
        public string? ClientRefNo { get; set; }
        public string? Barcode { get; set; } 
        public string? DCoName { get; set; }
        public string? DContact { get; set; }
        public string? DStreet { get; set; }
        public string? DStreet2 { get; set; }
        public string? DCity { get; set; }
        public string? DState { get; set; }
        public string? DZip { get; set; }
        public TimeSpan? PODcompletionTime { get; set; }
    }
}

