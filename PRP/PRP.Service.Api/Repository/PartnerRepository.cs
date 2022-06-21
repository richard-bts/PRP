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

        #region Public Methods
        public async Task<IEnumerable<PartnerDetailDto>> GetPartners()
        {
            List<PartnerDetail> partners = new List<PartnerDetail>();

            if (_db.Partners != null)
                partners = await _db.Partners.FromSqlRaw("EXEC [dbo].[sp_GetPartners]").ToListAsync();

            return _mapper.Map<List<PartnerDetailDto>>(partners);
        }
        public async Task<PartnerDetailDto> GetPartner(int partnerID)
        {
            PartnerDetail? partner = null;

            if (_db.Partners != null)
                partner = await _db.Partners.FromSqlRaw("EXEC [dbo].[sp_GetPartners]").FirstOrDefaultAsync();

            return _mapper.Map<PartnerDetailDto>(partner);
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
                partneremails = await _db.PartnerEmails.FromSqlRaw("EXEC [dbo].[sp_GetPartnerEmails] @partnerId", param).ToListAsync();

            return _mapper.Map<List<PartnerEmailDto>>(partneremails);
        }
        public async Task<PartnerDetailDto> AddPartner(PartnerDetailDto partner)
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
                            Value = partner.ReportName
                        }
                    };
                    if (_db.Partners != null)
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartner] @clientId, @partnerId, @partnerName, @reportName", param.ToArray());
                }
            }
            catch (Exception)
            {
            }
            return partner;
        }

        public async Task<PartnerEmailDto> AddPartnerEmail(PartnerEmailDto partneremail)
        {
            try
            {
                if (partneremail != null)
                {
                    DateTime createdDate = DateTime.Now;
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
                        },
                        new SqlParameter()
                        {
                            ParameterName="@date_created",
                            SqlDbType = System.Data.SqlDbType.DateTime,
                            Direction = System.Data.ParameterDirection.Input,
                            Value = createdDate
                        }
                    };
                    if (_db.PartnerEmails != null)
                    {
                        await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_AddPartnerEmail] @partnerId, @email, @date_created", param);
                    }
                }
            }
            catch (Exception)
            {
            }
            return partneremail;
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
                        }
                    };
                    await _db.Database.ExecuteSqlRawAsync("EXEC [dbo].[sp_EditPartner] @Id, @clientId, @partnerId, @partnerName, @reportName", param);
                }
            }
            catch (Exception)
            {
            }
            return partner;
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
                }
            }
            catch (Exception)
            {
            }
            return partneremail;
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
                _db.Database.ExecuteSqlRaw("EXEC [dbo].[sp_RemovePartnerDetails] @partnerId", param);
                response = true;
            }
            catch (Exception)
            {
            }
            return Task.FromResult(response);
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
        #endregion
    }
}