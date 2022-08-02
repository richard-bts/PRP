using System.ComponentModel.DataAnnotations;

namespace PRP.Domain.Models
{
    public class ReportType
    {

     
        [Key]
        public int report_type_id { get; set; }
        public string? report_name { get; set; }
        public DateTime? date_created { get;set; }
        public DateTime? date_modified { get;set; }

    }
}
