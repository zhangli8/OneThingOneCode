import { createSSRApp } from "vue"
import { createPinia } from 'pinia'
import '@/theme/index.scss'
import '@/router/index'
import App from "./App.vue"
import { useAppStore } from '@/stores/app'

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App);
  app.use(pinia)

  // 设置全局请求拦截器
  uni.addInterceptor('request', {
    invoke(args) {
      const appStore = useAppStore()
      const token = appStore.token

      if (token) {
        args.header = {
          ...args.header,
          Authorization: `Bearer ${token}`
        }
      }
    }
  })

  return {
    app,
  };
}
