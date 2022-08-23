using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models.Dto
{
    public class FindCompanyNameDto
    {
        [Key]
        public int ClientID { get; set; }
        public string? CompanyName { get; set; }
    }
}
