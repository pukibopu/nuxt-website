// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@sidebase/nuxt-auth",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  runtimeConfig:{
    gitHubAuthSecretClientId: process.env.NUXT_GITHUB_AUTH_SECRET_CLIENT_ID,
    public:{
      gitHubAuthClientId: process.env.NUXT_GITHUB_AUTH_CLIENT_ID,
    }
  },
  auth: {
    provider: {
      type: "authjs",
    },
  },
  devtools: { enabled: true },
  
});
