using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models
{
    public class PartnerEmail
    {
        [Key]
        public int partner_email_Id { get; set; }
        public int partner_id { get; set; }
        public string? email { get; set; }
        public DateTime? date_created { get; set; }
        public DateTime? date_modified { get; set; }
    }
}
