﻿using System.ComponentModel.DataAnnotations;

namespace PRP.Service.Api.Models
{
    public class ReportType
    {
        [Key]
        public int report_type_id { get; set; }

        public string? report_name { get; set; }

    }
}
