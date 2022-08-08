using PRP.Domain.Models.Dto;
namespace PRP.Service.Api.Repository
{
    public interface IReportRepository
    {
        Task<IEnumerable<PODReportDto>> GetPODReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ScanReportDto>> GetScanReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ExceptionReportDto>> GetExceptionReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ReportTypeDto>> GetReportTypes();
        Task<ReportTypeDto> AddReportType(ReportTypeDto raport);
        Task<ReportTypeDto> EditReportType(ReportTypeDto raport);
        Task<bool> RemoveReportType(int id);
    }
}
