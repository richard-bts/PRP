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
            var response = await _partnerService.GetPartners();

            Assert.NotNull(response);
        }

        [Fact]
        public async void AddPartner_Test()
        {
            var response = await _partnerService.AddPartner(new PartnerDetailDto
            {
                Id = 0,
                ClientId = 101,
                PartnerId = 102,
                PartnerName = "New Partner",
                ReportName = null
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void EditPartner_Test()
        {
            var response = await _partnerService.EditPartner(new PartnerDetailDto
            {
                Id = 1,
                ClientId = 101,
                PartnerId = 102,
                PartnerName = "New Partner Name",
                ReportName = "Scan Report"
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void RemovePartner_Test()
        {
            var response = await _partnerService.RemovePartner(102);

            Assert.True(response);
        }

        [Fact]
        public async void GetPartnerEmails_Test()
        {
            IEnumerable<PartnerDetailDto> partner = await _partnerService.GetPartners();

            var response = await _partnerService.GetPartnerEmails(102);

            Assert.NotNull(response);
        }

        [Fact]
        public async void AddPartnerEmail_Test()
        {
            var response = await _partnerService.AddPartnerEmail(new PartnerEmailDto
            {
                Id = 0,
                PartnerId = 102,
                Email = "test@broadviewtechnicalsolutions.com"
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void EditPartnerEmail_Test()
        {
            var response = await _partnerService.EditPartnerEmail(new PartnerEmailDto
            {
                Id = 0,
                PartnerId = 102,
                Email = "test@broadviewtechnicalsolutions.com;test2@broadviewtechnicalsolutions.com"
            });

            Assert.NotNull(response);
        }

        [Fact]
        public async void RemovePartnerEmail_Test()
        {
            var response = await _partnerService.RemovePartnerEmail(1);

            Assert.True(response);
        }
    }
}
