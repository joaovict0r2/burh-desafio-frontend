// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@Components": "./components"
  },
  app: {
    baseURL: process.env.BASE_URL,
  },
  css: [
    'assets/css/fonts.scss',
    'assets/css/app.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_mixins.scss";'
        }
      }
    }
  },
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@pinia/nuxt']
})
