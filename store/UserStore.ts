import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    description: ''
  }),

  getters: {
    username: (state) => state.name
  },

  actions: {
    signin({ name }: { name: string }) {
      this.name = name
      this.description = name
      navigateTo('/jobs')
    }
  }
})