using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PRP.Domain.Models
{
    public class ScanReport
    {
        public int clientID { get; set; }
        [Key]
        [Column(TypeName = "decimal(14,6)")]
        public decimal OrderTrackingID { get; set; }
        public string? ClientRefNo { get; set; }
        public string? SCANcode { get; set; }
        public string? SCANlocation { get; set; }
        public DateTime? aTimeStamp { get; set; }
    }
}
