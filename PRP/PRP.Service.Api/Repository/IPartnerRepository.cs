using PRP.Service.Api.Models.Dto;

namespace PRP.Service.Api.Repository
{
    public interface IPartnerRepository
    {
        Task<PartnerDetailDto> GetPartner(int partnerID);
        Task<IEnumerable<GetPartnerDetailDto>> GetPartners();
        Task<PartnerDetailDto> AddPartner(AddPartnerDto partner);
        Task<PartnerDetailDto> EditPartner(PartnerDetailDto partner);
        Task<bool> RemovePartner(int id);

        Task<IEnumerable<PartnerEmailDto>> GetEmails();
        Task<IEnumerable<PartnerEmailDto>> GetPartnerEmails(int partnerID);
        Task<IEnumerable<PartnerEmailDto>> AddPartnerEmail(PartnerEmailDto partneremail);
        Task<PartnerEmailDto> EditPartnerEmail(PartnerEmailDto partneremail);
        Task<bool> RemovePartnerEmail(int id);
        Task<IEnumerable<FindCompanyNameDto>> GetCompanyName(string name);
    }
}