using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models
{
    public class FindCompanyName
    {
        [Key]
        public int ClientID { get; set; }
        public string CompanyName { get; set; }
    }
}
