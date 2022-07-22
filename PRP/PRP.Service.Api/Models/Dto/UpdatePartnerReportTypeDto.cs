namespace PRP.Service.Api.Models.Dto
{
    public class UpdatePartnerReportTypeDto
    {
        public int partner_id { get; set; }
        public int report_type_id { get; set; }
        public int active { get; set; }
    }
}
