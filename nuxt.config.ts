// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "nuxt-tiptap-editor"],
  runtimeConfig: {
    public: {
      baseURL: `${process.env.BASE_URL}/${process.env.API_KEY}`
    }
  },
  alias: {
    "@Components": "./components"
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
  tiptap: {
    prefix: "Tiptap"
  },
  components: [{ path: '~/components', pathPrefix: false }],
  build: {
    transpile: ["vue-tosatification"]
  }
})