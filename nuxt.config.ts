// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "nuxt-tiptap-editor", "nuxt-vuefire"],
  app: {
    baseURL: process.env.BASE_URL,
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
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
})