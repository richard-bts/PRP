using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models
{
    public class PartnerEmail
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public string? Email { get; set; }
    }
}
