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

    //Adding PODReport repository
    builder.Services.AddScoped<IReportRepository, ReportRepository>();
    var app = builder.Build();

    //Adding Serilog's request logging streamlines
    //app.UseSerilogRequestLogging();
    #endregion

    #region APIs

    app.MapGet("api/GetPODReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
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

    app.MapGet("api/GetScanReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
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

    app.MapGet("api/GetExceptionReport", async ([FromServices] IReportRepository ReportRepository, DateTime inputDate, int clientID) =>
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

    app.MapGet("api/GetPartners", async ([FromServices] IReportRepository ReportRepository) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetPartners();
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartners api called successfully...");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartners api call failed. " +
                                    $"Error Message: {response.ErrorMessages}...");
        }

        return response;
    });

    app.MapGet("api/GetPartnerEmails", async ([FromServices] IReportRepository ReportRepository, int partnerID) =>
    {
        ResponseDto response = new ResponseDto();

        try
        {
            response.Result = await ReportRepository.GetPartnerEmails(partnerID);
            Log.Logger.ForContext("Component", "PRP.Service.Api").Information("{Message}", $"GetPartnerEmails api called successfully...partnerID:{partnerID}");
        }
        catch (Exception ex)
        {
            response.IsSuccess = false;
            response.ErrorMessages = new List<string>() { ex.ToString() };
            Log.Logger.ForContext("Component", "PRP.Service.Api").Error("{Message}", $"GetPartnerEmails api call failed. " +
                                    $"Error Message: {response.ErrorMessages}..partnerID:{partnerID}");
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