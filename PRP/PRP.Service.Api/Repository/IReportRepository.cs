using PRP.Service.Api.Models.Dto;
namespace PRP.Service.Api.Repository
{
    public interface IReportRepository
    {
        Task<IEnumerable<PODReportDto>> GetPODReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ScanReportDto>> GetScanReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ExceptionReportDto>> GetExceptionReport(DateTime inputDate, int clientID);
        Task<IEnumerable<PartnerDetailDto>> GetPartners();
        Task<IEnumerable<PartnerEmailDto>> GetPartnerEmails(int partnerID);
    }
}
