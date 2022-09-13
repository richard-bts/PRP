namespace PRP.Service.Domain.Models
{
    public interface IAPITime
    {
        DateTime Created { get; set; }

        void addTimetoExpToken(DateTime stemp);
        bool CheckTimetoken(DateTime stemp);
    }
}