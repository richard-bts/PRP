using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models
{
    public class PartnerDetail
    {
        [Key]
        public int id { get; set; }
        public int client_id { get; set; }
        public int partner_id { get; set; }
        public string partner_name { get; set; }
        public byte partner_active { get; set; }
        public int report_type_id { get; set; }
        public string report_name { get; set; }
        public DateTime partner_report_time { get; set; }
        public int? partner_email_id { get; set; }
        public string? partner_email { get; set; }
        public byte? email_active { get; set; }
        public byte report_active { get; set; }
    }
}