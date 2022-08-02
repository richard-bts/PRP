namespace PRP.Domain.Models.Dto
{
    public class UpdatePartnerDto
    {
        public int partner_id { get; set; }
        public string? partner_name { get; set; }
        public DateTime partner_report_time { get; set; }
        public int active { get; set; }
}
}
