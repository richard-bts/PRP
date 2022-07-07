using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models.Dto
{
    public class AddPartnerDto
    {
        public int ClientId { get; set; }
        [Key]
        public int PartnerId { get; set; }
        public string? PartnerName { get; set; }
        public List<string>? ReportName { get; set; }
        public DateTime? reportTime { get; set; }
    }
}