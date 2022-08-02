using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models
{
    public class Partner
    {
        [Key]
        public int partner_id { get; set; }
        public int client_id { get; set; }
        public string? partner_name { get; set; }
        public DateTime partner_report_time { get; set; }
        public int active { get; set; }
        public DateTime? date_created { get; set; }
        public DateTime? date_modified { get; set; }
    }
}