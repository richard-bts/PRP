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
        public Task<IEnumerable<bool>> AddPartner()
        {
            throw new NotImplementedException();
        }
        public Task<IEnumerable<bool>> AddPartnerEmail()
        {
            throw new NotImplementedException();
        }
        public Task<IEnumerable<bool>> EditPartner()
        {
            throw new NotImplementedException();
        }
        public Task<IEnumerable<bool>> EditPartnerEmail()
        {
            throw new NotImplementedException();
        }
        public Task<IEnumerable<bool>> RemovePartner()
        {
            throw new NotImplementedException();
        }
        public Task<IEnumerable<bool>> RemovePartnerEmail()
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
