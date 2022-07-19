namespace PRP.Service.Api.Models.Dto
{
    public class GetPartnerDto
    {
        public int id { get; set; }
        public int client_id { get; set; }
        public int partner_id { get; set; }
        public string partner_name { get; set; }
        public List<PartnerReportType>? partner_report_types { get; set; }
        public DateTime? partner_report_time { get; set; }
        public string partner_emails { get; set; }
        public int partner_active { get; set; }
    }
}
