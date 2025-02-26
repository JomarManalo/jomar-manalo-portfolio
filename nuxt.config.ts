export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  server: {
    port: process.env.PORT || 1174,
    host: '0.0.0.0',  // Ensure Nuxt listens on all network interfaces
  },
});
