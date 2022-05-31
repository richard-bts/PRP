using AutoMapper;
using PRP.Service.Api.Models;
using PRP.Service.Api.Models.Dto;

namespace PRPApi
{
    public class MappingConfig
    {
        #region Constructor
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<PODReportDto, PODReport>();
                config.CreateMap<PODReportDto, PODReport>().ReverseMap();
                config.CreateMap<ScanReportDto, ScanReport>();
                config.CreateMap<ScanReportDto, ScanReport>().ReverseMap();
                config.CreateMap<ExceptionReportDto, ExceptionReport>();
                config.CreateMap<ExceptionReportDto, ExceptionReport>().ReverseMap();
            });

            return mappingConfig;
        }
        #endregion
    }
}
