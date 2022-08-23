using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models.Dto
{
    public class ExceptionReportDto
    {
        public int clientID { get; set; }
        public string? OrderNumber { get; set; }
        [Key]
        public string? TrackingNumber { get; set; }
        public string? Exception { get; set; }
        public string? ExceptionDetails { get; set; }
        public string? EventTimestamp { get; set; }
        public DateTime ShipDate { get; set; }
        public DateTime EDD { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? FacilityCode { get; set; }
    }
}
