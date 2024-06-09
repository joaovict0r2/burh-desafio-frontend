import createServices from '~/services'

export const useService = () => {
  const config = useRuntimeConfig()
  const { $api } = useNuxtApp()

  return createServices($api, config)
}