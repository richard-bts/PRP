using PRP.WinService.Report;
using PRP.WinService;
using PRP.WinService.ApiServices;
using PRP.WinService.Email;
using Serilog;
using Microsoft.AspNetCore.Hosting;


Log.Logger = new LoggerConfiguration().CreateLogger();

Log.Logger.ForContext("Component", "PRP.WinService");

IHost host = Host.CreateDefaultBuilder(args)
    .UseSerilog((hostingContext, loggerConfiguration) =>
                 loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration))
    .ConfigureServices(services =>
    {
        services.AddHostedService<Worker>();
        services.AddSingleton<IProduceReport, ProduceReport>();
        services.AddSingleton<IPRPService, PRPService>();
        services.AddSingleton<IEmailService, EmailService>();
    })
    .Build();

await host.RunAsync();
    