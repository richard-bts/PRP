namespace PRP.WinService.Model
{
    public class PartnerDetailDto
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int PartnerId { get; set; }
        public string? PartnerName { get; set; }
        public string? ReportName { get; set; }
        public DateTime? ReportTime { get; set; }
    }
}
