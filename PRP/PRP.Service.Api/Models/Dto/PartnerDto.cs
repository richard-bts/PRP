namespace PRP.Service.Api.Models.Dto
{
    public class PartnerDto
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int PartnerId { get; set; }
        public string? PartnerName { get; set; }
        public string? ReportName { get; set; }
        public byte? active { get; set; }
    }
}