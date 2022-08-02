using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PRP.Domain.Models
{
    public class ApiRequest
    {
        public string? Url { get; set; }
        public object? Data { get; set; }
    }
}
