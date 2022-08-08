using Microsoft.EntityFrameworkCore;
using PRP.Domain.Models;

namespace PRP.Service.Api.DbContexts
{
    public class ApplicationDbContext: DbContext
    {
        #region Constructor And Member Variables
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {

        }

        public DbSet<PODReport>? PodReport { get; set; }
        public DbSet<ScanReport>? ScanReport { get; set; }
        public DbSet<ExceptionReport>? ExceptionReport { get; set; }
        public DbSet<PartnerDetail>? Partners { get; set; }
        public DbSet<PartnerEmail>? PartnerEmails { get; set; }

        public DbSet<ReportType>? ReportTypes { get; set; }
        public DbSet<FindCompanyName>? CampanyName { get; set; } 
        #endregion
    }
}
