using AutoMapper;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using PRP.Service.Api.DbContexts;
using PRP.Service.Api.Models;
using PRP.Service.Api.Models.Dto;
using PRP.Service.Api.Repository;
using PRPApi;
using System;
using System.Collections.Generic;
using System.Net.Http.Json;
using Xunit;

namespace PRP.Service.Api.Tests
{
    public class PartnerTest
    {
        public string _Connection = "Server=172.24.32.132;database=CDLData;User ID=CDL_PRP;Password=Bt3chPRP!22;max pool size=200;";

        private readonly ApplicationDbContext _dbContext;
        private readonly IPartnerRepository _partnerService;

        public PartnerTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            optionsBuilder.UseSqlServer(_Connection);

            _dbContext = new ApplicationDbContext(optionsBuilder.Options);

            IMapper mapper = MappingConfig.RegisterMaps().CreateMapper();
            _partnerService = new PartnerRepository(_dbContext, mapper);
        }

        [Fact]
        public async void GetPartner_Test()
        {
            var response = await _partnerService.GetPartners(-1);

            Assert.NotNull(response);
        }

        [Fact]
        public async void AddPartner_Test()
        {
            var response = await _partnerService.AddPartner(new AddPartnerDto
            {
                client_id = 101,
                partner_name = "New Partner",
                partner_report_types = new List<PartnerReportType>() { new PartnerReportType { report_type_id = 1, active = 1 } },
                partner_report_time = DateTime.Now
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void EditPartner_Test()
        {
            var response = await _partnerService.EditPartner(new UpdatePartnerDto 
            {
                partner_id = 102,
                partner_name = "Edited Partner Name",
                partner_report_time = DateTime.Now,
                active = 1
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void GetPartnerEmails_Test()
        {
            var response = await _partnerService.GetPartnerEmails(102);

            Assert.NotNull(response);
        }

        [Fact]
        public async void AddPartnerEmail_Test()
        {
            var response = await _partnerService.AddPartnerEmail(new PartnerEmailDto
            {
                partner_id = 3,
                partner_email = "test@broadviewtechnicalsolutions.com"
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void EditPartnerEmail_Test()
        {
            var response = await _partnerService.EditPartnerEmail(new UpdatePartnerEmailDto
            {
                partner_email_id = 2, 
                partner_id = 3,
                active = 1,
                email = "test@broadviewtechnicalsolutions.com;test2@broadviewtechnicalsolutions.com"
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void RemovePartnerEmail_Test()
        {
            var response = await _partnerService.RemovePartnerEmail(1);

            Assert.True(response);
        }
        [Fact]
        public async void GetCompanyName_Test()
        {
            var response = await _partnerService.GetCompanyName("Tes");

            Assert.NotNull(response);
        }
    }
}
