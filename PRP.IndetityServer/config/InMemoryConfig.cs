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

        //public static List<TestUser> GetUsers() =>
        //    new List<TestUser>
        //    {
        //        new TestUser
        //        {
        //            SubjectId = "11111111-1111-1111-1111-111111111111",
        //            Username = "testuser",
        //            Password = "testpassword",
        //            Claims = new List<Claim>
        //            {
        //                new Claim("given_name", "test"),
        //                new Claim("family_name", "user")
        //            }
        //        }
        //    };

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
                    ClientId = "PRP.IdentityServer",
                    ClientSecrets = new [] { new Secret("XwYYh4ihttaTbfBAL6Cq23YkABxpkH".Sha256()) },
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    RedirectUris = { "https://localhost:4444/signin-oidc" },
                    FrontChannelLogoutUri = "https://localhost:4444/signout-oidc",
                    PostLogoutRedirectUris = { "https://localhost:4444/signout-callback-oidc" },

                    AllowedScopes = { "api.full", "PRP.IdentityServer", "api.read", IdentityServerConstants.StandardScopes.OpenId }
               }
            };
    }
}
