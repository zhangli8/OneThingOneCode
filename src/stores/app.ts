import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    verifyCode: '' as string, 
    token: null as string | null, 
  }),
  actions: {
    setToken(newToken: string) {
      this.token = newToken;
    },
    clearToken() {
      this.token = null;
    },
  },
});