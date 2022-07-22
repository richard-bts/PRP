namespace PRP.Service.Api.Models.Dto
{
    public class GetPartnerDetailDto
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int PartnerId { get; set; }
        public string? PartnerName { get; set; }
        public List<string>? ReportName { get; set; }
        public DateTime? ReportTime { get; set; }
        public byte? active { get; set; }
    }
}