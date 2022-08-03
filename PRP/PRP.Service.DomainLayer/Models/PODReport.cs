using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PRP.Domain.Models
{
    public class PODReport
    {
        public int clientID { get; set; }
        [Key]
        [Column(TypeName = "decimal(14,6)")]
        public string OrderTrackingID { get; set; }
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
