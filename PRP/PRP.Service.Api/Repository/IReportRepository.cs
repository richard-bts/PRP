using PRP.Service.Api.Models.Dto;
namespace PRP.Service.Api.Repository
{
    public interface IReportRepository
    {
        Task<IEnumerable<PODReportDto>> GetPODReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ScanReportDto>> GetScanReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ExceptionReportDto>> GetExceptionReport(DateTime inputDate, int clientID);
        Task<IEnumerable<ReportTypeDto>> GetReportTypes();
        Task<IEnumerable<ReportTypeDto>> AddReportType(string name);
        Task<IEnumerable<ReportTypeDto>> EditReportType(int id, string Name);
        Task<bool> RemoveReportType(int id);
    }
}
