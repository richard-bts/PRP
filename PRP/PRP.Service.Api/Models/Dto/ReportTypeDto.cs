using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models.Dto
{
    public class ReportTypeDto
    {


        [Key]
        public int report_type_id { get; set; }
        public string? report_name { get; set; }
        public DateTime? date_created { get; set; }
        public DateTime? date_modified { get; set; }

    }
}
