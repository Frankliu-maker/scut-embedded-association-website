import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '华南理工大学嵌入式协会官网',
  description: '华南理工大学嵌入式协会官方网站：学习路线、项目展示、活动公告与加入方式。',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#00979d' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '协会首页', link: '/', activeMatch: '^/$' },
      { text: '学习路线', link: '/learn' },
      { text: '项目展示', link: '/projects' },
      { text: '活动公告', link: '/events' },
      { text: '加入联系', link: '/contact' }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',

    footer: {
      message: '学习 · 动手 · 分享',
      copyright: '© 2026 华南理工大学嵌入式协会'
    }
  }
})
