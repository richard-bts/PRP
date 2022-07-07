using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models.Dto
{
    public class PartnerEmailDto
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public string?  Email { get; set; }
    }
}
