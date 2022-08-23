namespace PRP.Service.Api.Models.Dto
{
    public class PartnerEmailDto
    {
        public int? partner_email_id { get; set; }
        public int partner_id { get; set; }
        public string? partner_email { get; set; }
        public byte? active { get; set; }
    }
}