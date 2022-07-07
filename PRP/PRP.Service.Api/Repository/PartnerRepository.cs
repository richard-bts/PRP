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
        public async Task<PartnerDetailDto> GetPartner(int partnerID)
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
                    return _mapper.Map<PartnerDetailDto>(partner.FirstOrDefault());
                }
                catch (Exception)
                {
                }
            }
            return null;
        }
        public async Task<IEnumerable<GetPartnerDetailDto>> GetPartners()
        {
            List<PartnerDetail> partners = new List<PartnerDetail>();
            if (_db.Partners != null)
            {
                partners = await _db.Partners.FromSqlRaw("EXEC [dbo].[sp_GetPartners]").ToListAsync();

                List<GetPartnerDetailDto> result = partners.GroupBy(p => p.PartnerId)  // group by Id
                  .Select(g => new GetPartnerDetailDto    // select values
                  {
                      Id = g.Key,
                      PartnerId = g.First().PartnerId,
                      PartnerName = g.First().PartnerName,
                      ClientId = g.First().ClientId,
                      ReportTime = g.First().ReportTime,
                      active = g.First().active,
                      ReportName = g.Select(p => p.ReportName).ToList()
                  })
                  .ToList();
                return result;
                //return _mapper.Map<List<PartnerDetailDto>>(partners);
            }
            return null;
        }
        public async Task<PartnerDetailDto> AddPartner(AddPartnerDto partner)
        {
            try
            {
                if (partner != null)
                {
                    List<SqlParameter> param = new()
                    {
                        new SqlParameter()
                        {
                            ParameterName="@clientId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.ClientId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.PartnerId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.PartnerName
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = string.Join(",",partner.ReportName)
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportTime",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.reportTime
                        }
                    };
                    List<SqlParameter> partnerreport_params = new();
                    foreach (string pr in partner.ReportName)
                    {
                        partnerreport_params.Add(new SqlParameter()
                        {
                            ParameterName = "@reportName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = pr
                        });
                    };
                    if (_db.Partners != null)
                    {
                        try
                        {
                            await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartner] @clientId, @partnerId, @partnerName, @reportName, @reportTime", param.ToArray());
                            foreach (SqlParameter sp in partnerreport_params)
                            {
                                await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartnerReport] @clientId, @partnerId, @reportName", param[0], param[1], sp);
                            }
                            return await GetPartner(partner.PartnerId);
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
        public async Task<PartnerDetailDto> EditPartner(PartnerDetailDto partner)
        {
            try
            {
                if (partner != null)
                {
                    var param = new SqlParameter[]
                    {
                        new SqlParameter()
                        {
                            ParameterName="@Id",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.Id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@clientId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.ClientId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.PartnerId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.PartnerName
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportName",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.ReportName
                        },
                        new SqlParameter()
                        {
                            ParameterName="@reportTime",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partner.ReportTime
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
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartner] @Id, @clientId, @partnerId, @partnerName, @reportName, @reportTime, @active", param.ToArray());
                        return await GetPartner(partner.PartnerId);
                    }
                }
            }
            catch (Exception)
            {
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
            }
            return Task.FromResult(response);
        }
        #endregion

        #region Public Partner Email Methods
        public async Task<IEnumerable<PartnerEmailDto>> GetEmails()
        {
            List<PartnerEmail> partneremails = new List<PartnerEmail>();
            if (_db.PartnerEmails != null)
            {
                try
                {
                    partneremails = await _db.PartnerEmails.FromSqlRaw("EXEC [dbo].[sp_GetPartnerEmails]").ToListAsync();
                    return _mapper.Map<List<PartnerEmailDto>>(partneremails);
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return null;
        }
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
                            Value = partneremail.PartnerId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@email",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.Email
                        }
                    };
                    if (_db.PartnerEmails != null)
                    {
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartnerEmail] @partnerId, @email", param);
                        return await GetPartnerEmails(partneremail.PartnerId);
                    }
                }
            }
            catch (Exception)
            {
            }
            return null;
        }
        public async Task<PartnerEmailDto> EditPartnerEmail(PartnerEmailDto partneremail)
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
                            Value = partneremail.Id
                        },
                        new SqlParameter()
                        {
                            ParameterName="@partnerId",
                            SqlDbType = System.Data.SqlDbType.Int,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.PartnerId
                        },
                        new SqlParameter()
                        {
                            ParameterName="@email",
                            SqlDbType = System.Data.SqlDbType.NVarChar,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = partneremail.Email
                        }
                    };
                    await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartnerEmail] @Id, @partnerId, @email", param);
                    return partneremail;
                }
            }
            catch (Exception)
            {
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