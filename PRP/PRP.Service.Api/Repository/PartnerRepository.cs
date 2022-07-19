using AutoMapper;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using PRP.Service.Api.DbContexts;
using PRP.Service.Api.Models;
using PRP.Service.Api.Models.Dto;

namespace PRP.Service.Api.Repository
{
    public class PartnerRepository : IPartnerRepository
    {
        #region Constructor And Member variables
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        public PartnerRepository(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        #endregion

        #region Public Partner Methods
        public async Task<GetPartnerDto> GetPartner(int partnerID)
        {
            List<PartnerDetail> partner = new();
            List<SqlParameter> param = new()
            {
                new SqlParameter()
                {
                    ParameterName = "@partnerId",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = partnerID
                }
            };
            if (_db.Partners != null)
            {
                try
                {
                    partner = await _db.Partners.FromSqlRaw("EXEC [dbo].[sp_GetPartner] @partnerId", param.ToArray()).ToListAsync();
                    List<GetPartnerDto> result = partner.GroupBy(p => p.partner_id)
                      .Select(g => new GetPartnerDto
                      {
                          id = g.FirstOrDefault().id,
                          client_id = g.FirstOrDefault().client_id,
                          partner_id = g.FirstOrDefault().partner_id,
                          partner_name = g.FirstOrDefault().partner_name,
                          partner_active = g.First().partner_active,

                          partner_report_types = g.Select(p => new PartnerReportType
                          {
                              report_type_id = p.report_type_id,
                              active = p.report_active
                          }).ToList(),
                          
                          partner_emails = g.FirstOrDefault().partner_emails,
                          partner_report_time = g.FirstOrDefault().partner_report_time
                      }).ToList();
                    return result.FirstOrDefault();
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return null;
        }
        public async Task<IEnumerable<GetPartnerDto>> GetPartners(int filter)
        {
            List<PartnerDetail> partners = new();
            if (_db.Partners != null)
            {
                partners = await _db.Partners.FromSqlRaw("EXEC [dbo].[sp_GetPartners]").ToListAsync();

                List<GetPartnerDto> result = partners.GroupBy(p => p.partner_id)
                  .Select(g => new GetPartnerDto
                  {
                      id = g.FirstOrDefault().id,
                      client_id = g.FirstOrDefault().client_id,
                      partner_id = g.FirstOrDefault().partner_id,
                      partner_name = g.FirstOrDefault().partner_name,
                      partner_active = g.First().partner_active,
                    
                      partner_report_types = g.Select(p => new PartnerReportType
                      {
                         report_type_id = p.report_type_id,
                         active = p.report_active
                      }).ToList(),

                      partner_emails = g.FirstOrDefault().partner_emails,
                      partner_report_time = g.FirstOrDefault().partner_report_time
                  })
                  .ToList();
                if (filter > -1)
                    result = result.Where(p => p.partner_active == filter).ToList();
                return result;
            }
            return null;
        }
        public async Task<GetPartnerDto> AddPartner(AddPartnerDto partner)
        {
            try
            {
                if (partner != null)
                {
                    SqlParameter[] param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@clientId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.client_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_name
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportTime",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_report_time
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Output
                        }
                    };
                    
                    if (_db.Partners != null)
                    {
                        try
                        {
                            await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartner] @clientId, @partnerName, @reportTime, @partnerId out", param);
                            int partnerId = (int)param[3].Value;
                            for(int i = 0; i < partner.partner_report_types.Count; i++)
                            {
                                await AddPartnerReport(partnerId, partner.partner_report_types[i].report_type_id, partner.partner_report_types[i].active);
                            };
                            await AddPartnerEmail(new PartnerEmailDto() { partner_id = partnerId, partner_email = partner.partner_emails });
                            return await GetPartner(partnerId);
                        }
                        catch (Exception)
                        {
                            throw;
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return null;
        }

        private async Task<bool> AddPartnerReport(int partnerId, int reportId, int active)
        {
            bool response = false;
            try
            {
                SqlParameter[] param = new SqlParameter[]
                {
                    new SqlParameter()
                    {
                        ParameterName = "@partnerId",
                        SqlDbType = System.Data.SqlDbType.NVarChar,
                        Direction = System.Data.ParameterDirection.Input,
                        Value = partnerId
                    },
                    new SqlParameter()
                    {
                        ParameterName = "@reportId",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Input,
                        Value = reportId
                    },
                    new SqlParameter()
                    {
                        ParameterName = "@active",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Input,
                        Value = active
                    }
                };
                await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartnerReport] @partnerId, @reportId, @active", param);
                response = true;
            }
            catch (Exception)
            {
                throw;
            }
            return response;
        }
        public async Task<GetPartnerDto> EditPartnerReportType(UpdatePartnerReportTypeDto partner)
        {
            try
            {
                if (partner != null)
                {
                    SqlParameter[] param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@reportId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.report_type_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@active",
                            SqlDbType = System.Data.SqlDbType.TinyInt,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.active
                        }
                    };
                    if (_db.Partners != null)
                    {
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartnerReportType] @reportId, @partnerId, @active", param.ToArray());
                        return await GetPartner(partner.partner_id);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return null;
        }

        public async Task<GetPartnerDto> EditPartner(UpdatePartnerDto partner)
        {
            try
            {
                if (partner != null)
                {
                    SqlParameter[] param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_name
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportTime",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.partner_report_time
                        },
                        new SqlParameter()
                        {
                            ParameterName="@active",
                            SqlDbType = System.Data.SqlDbType.TinyInt,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.active
                        }
                    };
                    if (_db.Partners != null)
                    {
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartner] @partnerId, @partnerName, @reportTime, @active", param.ToArray());
                        return await GetPartner(partner.partner_id);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return null;
        }

        public Task<bool> RemovePartner(int id)
        {
            bool response = false;
            try
            {
                var param = new SqlParameter[]
                {
                    new SqlParameter()
                    {
                        ParameterName="@partnerId",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Input,
                        Value = id
                    }
                };
                _db.Database.ExecuteSqlRaw("EXEC [dbo].[sp_RemovePartner] @partnerId", param);
                response = true;
            }
            catch (Exception)
            {
                throw;
            }
            return Task.FromResult(response);
        }
        #endregion

        #region Public Partner Email Methods
        public async Task<IEnumerable<PartnerEmailDto>> GetPartnerEmails(int partnerID)
        {
            var param = new SqlParameter[]
            {
                new SqlParameter()
                {
                    ParameterName="@partnerId",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Direction = System.Data.ParameterDirection.Input,
                    Value = partnerID
                }
            };
            List<PartnerEmail> partneremails = new List<PartnerEmail>();
            if (_db.PartnerEmails != null)
            {
                try
                {
                    partneremails = await _db.PartnerEmails.FromSqlRaw("EXEC [dbo].[sp_GetPartnerEmails] @partnerId", param).ToListAsync();
                    return _mapper.Map<List<PartnerEmailDto>>(partneremails);
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return null;
        }
        public async Task<IEnumerable<PartnerEmailDto>> AddPartnerEmail(PartnerEmailDto partneremail)
        {
            try
            {
                if (partneremail != null)
                {
                    var param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.partner_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@email",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.partner_email
                        }
                    };
                    if (_db.PartnerEmails != null)
                    {
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartnerEmail] @partnerId, @email", param);
                        return await GetPartnerEmails(partneremail.partner_id);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return null;
        }
        public async Task<IEnumerable<PartnerEmailDto>> EditPartnerEmail(UpdatePartnerEmailDto  partneremail)
        {
            try
            {
                if (partneremail != null)
                {
                    var param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@Id",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.partner_email_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.partner_id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@email",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.email
                        },
                        new SqlParameter()
                        {
                            ParameterName="@active",
                            SqlDbType = System.Data.SqlDbType.TinyInt,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.active
                        }
                    };
                    await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartnerEmail] @Id, @partnerId, @email, @active", param);
                    return await GetPartnerEmails(partneremail.partner_id);
                }
            }
            catch (Exception)
            {
                throw;
            }
            return null;
        }
        public Task<bool> RemovePartnerEmail(int id)
        {
            bool response = false;
            try
            {
                var param = new SqlParameter[]
                {
                    new SqlParameter()
                    {
                        ParameterName="@partnerId",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Input,
                        Value = id
                    }
                };
                _db.Database.ExecuteSqlRaw("EXEC [dbo].[sp_RemovePartnerEmails] @partnerId", param);
                response = true;
            }
            catch (Exception)
            {
                throw;
            }
            return Task.FromResult(response);
        }

        public async Task<IEnumerable<FindCompanyNameDto>> GetCompanyName(string name)
        {
            List<FindCompanyName> NameCampany = new List<FindCompanyName>();
            if (_db.CampanyName != null)
            {
                var param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@text",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = name
                        }
                    };
                
                NameCampany = await _db.CampanyName.FromSqlRaw("EXEC [dbo].[sp_GetCompanyName] @text", param).ToListAsync();
                return _mapper.Map<List<FindCompanyNameDto>>(NameCampany);
            }
            return null;
        }
        #endregion
    }
}