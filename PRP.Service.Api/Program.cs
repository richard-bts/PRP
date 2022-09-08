using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRPApi;
using PRP.Service.Api.DbContexts;
using PRP.Domain.Models.Dto;
using PRP.Service.Api.Repository;
using Serilog;
using Microsoft.OpenApi.Models;
using IdentityServer4.AccessTokenValidation;
using System.Configuration;

try
{
    #region Configurations
    var builder = WebApplication.CreateBuilder(args);

    Log.Logger = new LoggerConfiguration()
        .Enrich.FromLogContext()
        .WriteTo.Console()
        .CreateBootstrapLogger();

    Log.Logger.ForContext("Component", "PRP.Service.Api");

    builder.Host.UseSerilog((ctx, lc) => lc
    .WriteTo.Console()
    .ReadFrom.Configuration(ctx.Configuration));


    builder.Services.AddCors(options =>
    {
        options.AddPolicy("corsapp",
            policy =>
            {
                policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
            });
    });

    // Add services to the container.
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo
        {
            Title = "Authorization",
            Version = "v1"
        });
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
        {
            Name = "Authorization",
            Type = SecuritySchemeType.ApiKey,
            Scheme = "Bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "Enter 'Bearer' [space] and then your token in the text input below.\nAdd Bearer prefix to token",
        });
        c.AddSecurityRequirement(new OpenApiSecurityRequirement {
            {
                new OpenApiSecurityScheme {
                    Reference = new OpenApiReference {
                        Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                    }
                },
                Array.Empty<string>()
            }
        });
    });

    builder.Services.AddAuthorization();
    builder.Services.AddAuthentication(o =>
    {
        o.DefaultAuthenticateScheme = IdentityServerAuthenticationDefaults.AuthenticationScheme;
        o.DefaultChallengeScheme = IdentityServerAuthenticationDefaults.AuthenticationScheme;
    })
                    .AddJwtBearer(o =>
                    {
                        o.SaveToken = true;
                        o.Authority = "https://testx.cdldelivers.com/Xcelerator/authentication"; ; // Other Identity provider here
                        o.RequireHttpsMetadata = false;
                        o.Audience = "api.full";
                    });


    //Configure DB
    builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionString_CDLPRP")));

    //Configure automapper
    IMapper mapper = MappingConfig.RegisterMaps().CreateMapper();
    builder.Services.AddSingleton(mapper);
    builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    //Adding ReportRepository,PartnerRepository repositories
    builder.Services.AddScoped<IReportRepository, ReportRepository>();
    builder.Services.AddScoped<IPartnerRepository, PartnerRepository>();
    var app = builder.Build();

    //Adding Serilog's request logging streamlines
    //app.UseSerilogRequestLogging();

    app.UseAuthentication();
    app.UseAuthorization();
    #endregion

    #region Report APIs

    app.MapGet("api/report/GetPODReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetPODReport(inputDate, clientID);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPODReport api called successfully..." +
                                   $"inputDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPODReport api call failed. " +
                                    $"Error Message: {response.ErrorMessages}...inputeDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");

        }

        return response;
    }).RequireAuthorization();

    app.MapGet("api/report/GetScanReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetScanReport(inputDate, clientID);

            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetScanReport api called successfully..." +
                                   $"inputDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };

            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetScanReport api call failed. " +
                                    $"Error Message: {response.ErrorMessages}...inputDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");
        }

        return response;
    }).RequireAuthorization();

    app.MapGet("api/report/GetExceptionReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetExceptionReport(inputDate, clientID);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetExceptionReport api called successfully..." +
                                   $"inputDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetExceptionReport api call failed. " +
                                    $"Error Message: {response.ErrorMessages}...inputDate:{inputDate.ToLongDateString()}...ClientID:{clientID}");
        }

        return response;
    }).RequireAuthorization();

    app.MapGet("api/report/GetReportTypes", async ([FromServices] IReportRepository ReportRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetReportTypes();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetReportTypes api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetReportTypes api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();

    app.MapGet("report-types", async ([FromServices] IReportRepository ReportRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetReportTypes();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetReportTypes api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetReportTypes api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();

    app.MapPost("api/report/AddReportType", async ([FromServices] IReportRepository ReportRepository, ReportTypeDto RaportType) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.AddReportType(RaportType);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"AddReportType api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"AddReportType api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();

    app.MapPut("api/report/EditReportType", async ([FromServices] IReportRepository ReportRepository, ReportTypeDto RaportType) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.EditReportType(RaportType);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"EditReportType api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"EditReportType api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();

    app.MapDelete("api/report/RemoveReportType", async ([FromServices] IReportRepository ReportRepository, int idReportType) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.RemoveReportType(idReportType);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"RemoveReportType api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"RemoveReportType api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();
    #endregion

    #region Partner APIs
    app.MapGet("partner", async ([FromServices] IPartnerRepository PartnerRepository, int partner_id) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.GetPartner(partner_id);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"parnter api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"partner api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;

    }).RequireAuthorization();

    app.MapGet("partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.GetPartners(-1);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"partners api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"partners api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;

    }).RequireAuthorization();

    app.MapGet("active-partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.GetPartners(1);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"active-partners api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"active-partners api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;

    }).RequireAuthorization();

    app.MapGet("inactive-partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.GetPartners(0);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"inactive-partners api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"inactive-partners api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;

    }).RequireAuthorization();

    app.MapPost("create-partner", async ([FromServices] IPartnerRepository PartnerRepository, AddPartnerDto partner) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.AddPartner(partner);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"create-partner api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"create-partner api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapPut("update-partner", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerDto partner) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.EditPartner(partner);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"update-partner api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"update-partner api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapGet("partner-emails", async ([FromServices] IPartnerRepository PartnerRepository, int partnerID) =>
    {
        PartnerResponseDto<PartnerEmailDto> response = new();

        try
        {
            response.data = await PartnerRepository.GetPartnerEmails(partnerID);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"partner-emails api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"partner-emails api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapPost("add-partner-email", async ([FromServices] IPartnerRepository PartnerRepository, PartnerEmailDto partner) =>
    {
        PartnerResponseDto<PartnerEmailDto> response = new();

        try
        {
            response.data = await PartnerRepository.AddPartnerEmail(partner);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"add-partner-email api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"add-partner-email api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapPut("update-partner-email", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerEmailDto partner) =>
    {
        PartnerResponseDto<PartnerEmailDto> response = new();

        try
        {
            response.data = await PartnerRepository.EditPartnerEmail(partner);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"update-partner-email api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"EditPartnerEmail api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapPut("remove-partner-email", async ([FromServices] IPartnerRepository PartnerRepository, int emailId) =>
    {
        PartnerResponseDto<bool> response = new();

        try
        {
            response.data = new List<bool>() { await PartnerRepository.RemovePartnerEmail(emailId) };
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"remove-partner-email api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 1;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"remove-partner-email api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapPut("update-partner-report-type", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerReportTypeDto partner) =>
    {
        PartnerResponseDto<GetPartnerDto> response = new();

        try
        {
            response.data = await PartnerRepository.EditPartnerReportType(partner);
            response.count = response.data.Count();
            response.msg = "success";
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"update-partner-report-type api called successfully...");
        }
        catch (Exception ex)
        {
            response.count = 0;
            response.success = false;
            response.msg = ex.ToString();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"update-partner-report-type api call failed. " +
                                    $"Error Message: {response.msg}");
        }

        return response;
    }).RequireAuthorization();

    app.MapGet("api/report/GetCompanyName", async ([FromServices] IPartnerRepository PartnerRepository, string Name) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetCompanyName(Name);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetCompanyName api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetCompanyName api call failed. " +
                $"Error Message: {response.ErrorMessages}.");
        }

        return response;
    }).RequireAuthorization();
    #endregion

    #region Development env settings and app run
    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseCors("corsapp");
    app.Run();

    #endregion
}
catch (Exception ex)
{
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    Log.Information("Shut down complete");
    Log.CloseAndFlush();
}