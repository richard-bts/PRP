using System.ComponentModel.DataAnnotations;

namespace PRP.WinService.Model
{
    public class PartnerEmailDto
    {
        [Key]
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public string?  Email { get; set; }
    }
}
