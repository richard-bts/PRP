using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PRPApi;
using PRP.Service.Api.DbContexts;
using PRP.Service.Api.Models.Dto;
using PRP.Service.Api.Repository;
using Serilog;


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
    builder.Services.AddSwaggerGen();


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
    #endregion

    #region APIs

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
    });

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
    });

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
    });

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
    });

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
    });

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
    });

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
    });

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
    });

    app.MapGet("partner", async ([FromServices] IPartnerRepository PartnerRepository,int partner_id) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetPartner(partner_id);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartner api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartner api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;

    });

    app.MapGet("partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetPartners(-1);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartners api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartners api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;

    });

    app.MapGet("active-partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetPartners(1);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartners api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartners api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;

    });

    app.MapGet("inactive-partners", async ([FromServices] IPartnerRepository PartnerRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetPartners(0);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartners api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartners api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;

    });

    app.MapPost("create-partner", async ([FromServices] IPartnerRepository PartnerRepository, AddPartnerDto partner) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.AddPartner(partner);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"AddPartner api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"AddPartner api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

    app.MapPut("update-partner", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerDto partner) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.EditPartner(partner);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"EditPartner api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"EditPartner api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

    app.MapGet("partner-emails", async ([FromServices] IPartnerRepository PartnerRepository, int partnerID) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.GetPartnerEmails(partnerID);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartnerEmails api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartnerEmails api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

    app.MapPost("add-partner-email", async ([FromServices] IPartnerRepository PartnerRepository, PartnerEmailDto partner) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.AddPartnerEmail(partner);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"AddPartnerEmail api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"AddPartnerEmail api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

    app.MapPut("update-partner-email", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerEmailDto partner) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.EditPartnerEmail(partner);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"EditPartnerEmail api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"EditPartnerEmail api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

    app.MapPut("update-partner-report-type", async ([FromServices] IPartnerRepository PartnerRepository, UpdatePartnerReportTypeDto partner) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await PartnerRepository.EditPartnerReportType(partner);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"EditPartnerEmail api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"EditPartnerReportType api call failed. " +
                                    $"Error Message: {response.ErrorMessages}");
        }

        return response;
    });

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
    });
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