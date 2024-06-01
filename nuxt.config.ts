// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.BASE_URL
  },
  css: [
    'assets/css/fonts.css',
    'assets/css/app.css'
  ]
})
