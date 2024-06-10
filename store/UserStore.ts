import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
  }),

  getters: {
    username: (state) => state.name
  },

  actions: {
    signin({ name }: { name: string }) {
      this.name = name
      navigateTo('/jobs')
    }
  }
})