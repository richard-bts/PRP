using AutoMapper;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using PRP.Service.Api.DbContexts;
using PRP.Service.Api.Models.Dto;
using PRP.Service.Api.Repository;
using PRPApi;
using System;
using System.Collections.Generic;
using System.Net.Http.Json;
using Xunit;

namespace PRP.Service.Api.Tests
{
    public class ReportTest
    {
        public string _Connection = "Server=172.24.32.132;database=CDLData;User ID=CDL_PRP;Password=Bt3chPRP!22;max pool size=200;";
        //public string _Connection = "Server=WORKPC\\SQLEXPRESS;database=CDLData;Integrated Security = SSPI;max pool size=200;";
        
        private readonly ApplicationDbContext _dbContext;
        private readonly IReportRepository _reportservice;

        public ReportTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseSqlServer(_Connection);

            _dbContext = new ApplicationDbContext(optionsBuilder.Options);
            
             IMapper mapper = MappingConfig.RegisterMaps().CreateMapper();
             _reportservice = new ReportRepository(_dbContext, mapper);            
        }

        [Fact]
        public async void GetPODReport_Test()
        {
            var response = await _reportservice.GetPODReport(DateTime.Now, 112);

            Assert.NotNull(response);
        }

        [Fact]
        public async void GetScanReport_Test()
        {
            var response = await _reportservice.GetScanReport(DateTime.Now, 112);

            Assert.NotNull(response);
        }

        [Fact]
        public async void GetExceptionReport_Test()
        {
            var response = await _reportservice.GetExceptionReport(DateTime.Now, 112);

            Assert.NotNull(response);
        }
        [Fact]
        public async void GetReportType()
        {
            var response = await _reportservice.GetReportTypes();

            Assert.NotNull(response);
        }


        [Fact]
        public async void AddReportType_Test()
        {
            var response = await _reportservice.AddReportType(new ReportTypeDto
            {
                report_type_id = 0,
                report_name ="Unit Test",
                date_created = DateTime.Now,
                date_modified = DateTime.Now              
            }); 

            Assert.NotNull(response);
        }
        [Fact]
        public async void EditReportType_Test()
        {
            var response = await _reportservice.EditReportType(new ReportTypeDto
            {
                report_type_id = 6,
                report_name = "Unit edit",
                date_created = DateTime.Now.AddHours(1),
                date_modified = DateTime.Now
            });

            Assert.NotNull(response);
        }
        [Fact]
        public async void RemoveReportType_Test()
        {
            var response = await _reportservice.RemoveReportType(6);

            Assert.NotNull(response);
        }
    }
}