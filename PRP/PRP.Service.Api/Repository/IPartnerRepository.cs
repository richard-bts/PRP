using PRP.Service.Api.Models;
using PRP.Service.Api.Models.Dto;

namespace PRP.Service.Api.Repository
{
    public interface IPartnerRepository
    {
        Task<IEnumerable<GetPartnerDto>> GetPartner(int partnerID);
        Task<IEnumerable<GetPartnerDto>> GetPartners(int filter);
        Task<IEnumerable<GetPartnerDto>> AddPartner(AddPartnerDto partner);
        Task<IEnumerable<GetPartnerDto>> EditPartner(UpdatePartnerDto partner);
        Task<IEnumerable<GetPartnerDto>> EditPartnerReportType(UpdatePartnerReportTypeDto partner);
        
        Task<IEnumerable<PartnerEmailDto>> GetPartnerEmails(int partnerID);
        Task<IEnumerable<PartnerEmailDto>> AddPartnerEmail(PartnerEmailDto partneremail);
        Task<IEnumerable<PartnerEmailDto>> EditPartnerEmail(UpdatePartnerEmailDto partneremail);
        Task<bool> RemovePartnerEmail(int id);
        Task<IEnumerable<FindCompanyNameDto>> GetCompanyName(string name);
    }
}