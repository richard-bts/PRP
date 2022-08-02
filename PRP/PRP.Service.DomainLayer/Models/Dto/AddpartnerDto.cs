namespace PRP.Domain.Models.Dto
{
    public class AddPartnerDto
    {
        public int client_id { get; set; }
        public string? partner_name { get; set; }
        public DateTime partner_report_time { get; set; }
        public List<PartnerReportType>? partner_report_types { get; set; }
        public string? partner_emails { get; set; }
    }
}
