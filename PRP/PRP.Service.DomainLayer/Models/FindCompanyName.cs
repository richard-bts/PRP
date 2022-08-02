using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models
{
    public class FindCompanyName
    {
        [Key]
        public int ClientID { get; set; }
        public string? CompanyName { get; set; }
    }
}
