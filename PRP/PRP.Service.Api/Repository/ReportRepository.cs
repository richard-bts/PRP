using AutoMapper;
using PRP.Service.Api.Models;
using PRP.Service.Api.Models.Dto;
using Microsoft.EntityFrameworkCore;
using PRP.Service.Api.DbContexts;
using Microsoft.Data.SqlClient;

namespace PRP.Service.Api.Repository
{
    public class ReportRepository : IReportRepository
    {
        #region Constructor And Member variables
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;   

        public ReportRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        #endregion

        #region Public Methods
        public async Task<IEnumerable<PODReportDto>> GetPODReport(DateTime inputDate, int clientID)
        {
            var param = new SqlParameter[]
            {
                        new SqlParameter()
                        {
                            ParameterName="@inputDate",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = inputDate
                        },
                        new SqlParameter()
                        {
                            ParameterName="@clientID",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value=clientID
                        }
            };

            List<PODReport> podreport = new List<PODReport>();

            if (_db.PodReport != null)            
               podreport = await _db.PodReport.FromSqlRaw("EXEC [dbo].[sp_GetPODReport] @inputDate, @clientID", param).ToListAsync();
            
            return _mapper.Map<List<PODReportDto>>(podreport);
        }
        public async Task<IEnumerable<ScanReportDto>> GetScanReport(DateTime inputDate, int clientID)
        {
            var param = new SqlParameter[]
            {
                        new SqlParameter()
                        {
                            ParameterName="@inputDate",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = inputDate
                        },
                        new SqlParameter()
                        {
                            ParameterName="@clientID",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value=clientID
                        }
            };

            List<ScanReport> scanreport = new List<ScanReport>();

            if(_db.ScanReport !=null)
                scanreport= await _db.ScanReport.FromSqlRaw("EXEC [dbo].[sp_GetScanReport] @inputDate, @clientID", param).ToListAsync();

            return _mapper.Map<List<ScanReportDto>>(scanreport);
        }
        public async Task<IEnumerable<ExceptionReportDto>> GetExceptionReport(DateTime inputDate, int clientID)
        {
            var param = new SqlParameter[]
            {
                        new SqlParameter()
                        {
                            ParameterName="@inputDate",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = inputDate
                        },
                        new SqlParameter()
                        {
                            ParameterName="@clientID",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value=clientID
                        }
            };

            List<ExceptionReport> exceptionreport = new List<ExceptionReport>();

            if(_db.ExceptionReport != null)
                exceptionreport = await _db.ExceptionReport.FromSqlRaw("EXEC [dbo].[sp_GetExceptionReport] @inputDate, @clientID", param).ToListAsync();

            return _mapper.Map<List<ExceptionReportDto>>(exceptionreport);
        }

        public Task<IEnumerable<bool>> GetReportTypes()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<bool>> AddReportType()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<bool>> EditReportType()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<bool>> RemoveReportType()
        {
            throw new NotImplementedException();
        }
        #endregion

    }
}
