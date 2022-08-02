using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models.Dto
{
    public class UpdatePartnerEmailDto
    {
        [Key]
        public int partner_email_id { get; set; }
        public int partner_id { get; set; }
        public string? email { get; set; }
        public int active { get; set; }
    }
}
