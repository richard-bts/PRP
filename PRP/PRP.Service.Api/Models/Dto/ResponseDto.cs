namespace PRP.Service.Api.Models.Dto
{
    public class ResponseDto
    {
        public int count { get; set; }
        public bool IsSuccess { get; set; } = true;
        public object? Result { get; set; }
        public string DisplayMessage { get; set; } = "";
        public List<string>? ErrorMessages { get; set; }
    }
}
