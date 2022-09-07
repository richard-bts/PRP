using Microsoft.Extensions.DependencyInjection;
using PRP.IndetityServer.config;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddIdentityServer()
                .AddInMemoryClients(InMemoryConfig.GetClients())
                .AddInMemoryIdentityResources(InMemoryConfig.GetIdentityResources())
                .AddInMemoryApiResources(InMemoryConfig.GetResources)
                .AddInMemoryApiScopes(InMemoryConfig.GetScopes)
                .AddDeveloperSigningCredential();

var app = builder.Build();
app.UseIdentityServer();
app.Run();