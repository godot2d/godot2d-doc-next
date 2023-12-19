import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'godot2d',
      description: 'godot2d',
    },
    '/zh/': {
      lang: '简体中文',
      title: 'godot2d',
      description: 'godot2d',
    },
  },
  theme: defaultTheme({
    logo: '/fixit.min.svg',
    locales: {
      "/": {
        navbar: [
          {
            text: 'Homepage',
            link: '/',
          },
          '/README.md',
        ],
      },
      "/zh/": {
        navbar: [
          {
            text: '首页',
            link: '/zh',
          },
          '/zh/README.md',
        ],
      },
    },
  }),
})

