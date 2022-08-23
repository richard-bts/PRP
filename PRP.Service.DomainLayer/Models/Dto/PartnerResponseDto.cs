namespace PRP.Domain.Models.Dto
{
    public class PartnerResponseDto<T>
    {
        public IEnumerable<T>? data { get; set; }
        public string msg { get; set; } = "";
        public int count { get; set; }
        public bool success { get; set; } = true;
    }
}