using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Security.Claims;

namespace PRP.IndetityServer.config
{
    public static class InMemoryConfig
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {
                //new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };

        public static IEnumerable<ApiScope> GetScopes =>
            new ApiScope[]
            {
                new ApiScope("api.read"),
                new ApiScope("api.full"),
                new ApiScope("PRP.IdentityServer"),
            };

        public static IEnumerable<ApiResource> GetResources =>
        new ApiResource[]
        {
            new ApiResource("api.full")
            {
                Scopes = new List<string>{ "api.full" },
                ApiSecrets = new List<Secret>{ new Secret("ThisIsVerySecure".Sha256()) },
            },
            new ApiResource("api.read")
            {
                Scopes = new List<string>{ "api.read" },
                ApiSecrets = new List<Secret>{ new Secret("ThisIsVerySecure".Sha256()) },
            },
            new ApiResource("PRP.IdentityServer")
            {
                Scopes = new List<string>{ "PRP.IdentityServer" },
                ApiSecrets = new List<Secret>{ new Secret("1XwYYh4ihttaTbfBAL6Cq23YkABxpkH".Sha256()) },
            }
        };

        public static IEnumerable<Client> GetClients() =>
            new List<Client>
            {
               new Client
               {
                    ClientId = "PRP.WebClient",
                    ClientSecrets = new [] { new Secret("XwYYh4ihttaTbfBAL6Cq23YkABxpkH".Sha256()) },
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    RedirectUris = { "https://localhost:4444/signin-oidc" },
                    FrontChannelLogoutUri = "https://localhost:4444/signout-oidc",
                    PostLogoutRedirectUris = { "https://localhost:4444/signout-callback-oidc" },

                    AllowedScopes = { "api.full", "PRP.IdentityServer", "api.read", IdentityServerConstants.StandardScopes.OpenId }
               },
               new Client
               {
                    ClientId = "PRP.WindowsService",
                    ClientSecrets = new [] { new Secret("XwYY23YkABxpkHh4ihttaTbfBAL6Cq".Sha256()) },
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    RedirectUris = { "https://localhost:4444/signin-oidc" },
                    FrontChannelLogoutUri = "https://localhost:4444/signout-oidc",
                    PostLogoutRedirectUris = { "https://localhost:4444/signout-callback-oidc" },

                    AllowedScopes = { "api.read", IdentityServerConstants.StandardScopes.OpenId }
               }
            };
    }
}
