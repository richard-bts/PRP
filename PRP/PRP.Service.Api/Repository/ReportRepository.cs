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

        public async Task<IEnumerable<ReportTypeDto>> GetReportTypes()
        {

            List<ReportType> raporttype = new List<ReportType>();

            if (_db.ReportTypes != null)
                raporttype = await _db.ReportTypes.FromSqlRaw("EXEC [dbo].[sp_GetReportTypes]").ToListAsync();

            return _mapper.Map<List<ReportTypeDto>>(raporttype);
        }

        public async Task<ReportTypeDto> AddReportType(ReportTypeDto raport)
        {
            if (raport != null)
            {
                var param = new SqlParameter[]
               {
                        new SqlParameter()
                        {
                            ParameterName="@report_name",
                            SqlDbType = System.Data.SqlDbType.Text,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = raport.report_name
                        },
                        new SqlParameter()
                        {
                            ParameterName="@date_created",
                            SqlDbType = System.Data.SqlDbType.Date,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = DateTime.Now
                        },
                        new SqlParameter()
                        {
                            ParameterName="@date_modified",
                            SqlDbType = System.Data.SqlDbType.Date,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = DateTime.Now
                        }


               };

                List<ReportType> addreporttype = new List<ReportType>();

                if (_db.ReportTypes != null)
                    addreporttype = await _db.ReportTypes.FromSqlRaw("EXEC [dbo].[sp_AddReportType] @report_name, @date_created, @date_modified", param).ToListAsync();
            }
            return raport;
        }

        public async Task<ReportTypeDto> EditReportType(ReportTypeDto raport)
        {
            try
            {
                if (raport != null)
                {
                    var param = new SqlParameter[]
                 {
                            new SqlParameter()
                            {
                                ParameterName="@id",
                                SqlDbType = System.Data.SqlDbType.Int,
                                Direction = System.Data.ParameterDirection.Input,
                                Value = raport.report_type_id
                            },
                            new SqlParameter()
                            {
                                ParameterName="@name",
                                SqlDbType = System.Data.SqlDbType.Text,
                                Direction = System.Data.ParameterDirection.Input,
                                Value = raport.report_name
                            }
                            ,
                            new SqlParameter()
                            {
                                ParameterName="@date",
                                SqlDbType = System.Data.SqlDbType.DateTime,
                                Direction = System.Data.ParameterDirection.Input,
                                Value = raport.date_modified
                            }


                 };
                    await _db.ReportTypes.FromSqlRaw("EXEC [dbo].[sp_EditReportType] @id, @name, @date", param).ToListAsync();
                }
            }
            catch (Exception)
            {
            }
            return raport;




            throw new NotImplementedException();
        }

        public async Task<bool> RemoveReportType(int id)
        {
            var param = new SqlParameter[]
           {
                        new SqlParameter()
                        {
                            ParameterName="@id",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = id
                        }


           };

            List<ReportType> removereporttype = new List<ReportType>();

            if (_db.ReportTypes != null)
                removereporttype = await _db.ReportTypes.FromSqlRaw("EXEC [dbo].[sp_RemoveReportType] @id", param).ToListAsync();
            if (removereporttype.Count > 0)
                return true;
            else
                return false;
            
        }
        #endregion

    }
}
