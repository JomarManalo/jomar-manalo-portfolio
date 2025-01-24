// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  server: {
    port: process.env.PORT || 1174, // Use PORT from environment or fallback to 1174
  },
});
