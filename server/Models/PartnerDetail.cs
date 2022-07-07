namespace PRP.Service.Api.Models
{
    public class PartnerDetail
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int PartnerId { get; set; }
        public string? PartnerName { get; set; }
        public string? ReportName { get; set; }
        public DateTime? ReportTime { get; set; }
        public byte? active { get; set; }
    }
}