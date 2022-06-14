using PRP.Service.Api.Models.Dto;

namespace PRP.Service.Api.Repository
{
    public interface IPartnerRepository
    {
        Task<IEnumerable<PartnerDetailDto>> GetPartners();
        Task<IEnumerable<PartnerEmailDto>> GetPartnerEmails(int partnerID);
        Task<IEnumerable<bool>> AddPartner();
        Task<IEnumerable<bool>> EditPartner();
        Task<IEnumerable<bool>> RemovePartner();
        Task<IEnumerable<bool>> AddPartnerEmail();
        Task<IEnumerable<bool>> EditPartnerEmail();
        Task<IEnumerable<bool>> RemovePartnerEmail();
    }
}
