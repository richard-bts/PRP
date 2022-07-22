namespace PRP.Service.Api.Models.Dto
{
    public class PartnerResponseDto<T>
    {
        public int Count { get; set; }
        public bool IsSuccess { get; set; } = true;
        public IEnumerable<T>? Result { get; set; }
        public string DisplayMessage { get; set; } = "";
        public List<string>? ErrorMessages { get; set; }
    }
}