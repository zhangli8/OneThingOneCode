import type { Config } from 'tailwindcss'
import cssMacro from 'weapp-tailwindcss/css-macro'
import { isMp } from './platform'

export default <Config>{
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 你可以在这里进行颜色的扩展
        primary: {
          'DEFAULT': '#2994F1',
          'light-8': '#E0EAFE',
          'light-9': '#F0F5FE',
          'strong-1': '#00529A'
        },
      },
    },
  },
  // https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro
  plugins: [
    cssMacro({
      variantsMap: {
        'wx': 'MP-WEIXIN',
        '-wx': {
          value: 'MP-WEIXIN',
          negative: true,
        },
        // 定义多个条件判断
        // mv: {
        //   value: 'H5 || MP-WEIXIN'
        // },
        // '-mv': {
        //   value: 'H5 || MP-WEIXIN',
        //   negative: true
        // }
      },
    })
  ],
  corePlugins: {
    // 小程序去使用 h5 的 preflight 和响应式 container 没有意义
    preflight: !isMp,
    container: !isMp,
  },
}