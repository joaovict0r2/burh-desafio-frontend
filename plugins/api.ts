export default defineNuxtPlugin({
  setup() {
    const baseURL = useRuntimeConfig().public.baseURL

    const api = $fetch.create({ baseURL })

    return {
      provide: { 
        api 
      }
    }
  }
})