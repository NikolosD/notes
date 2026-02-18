import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Notes',
  description: 'Minimal notes system',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Дни', link: '/daily' },
      { text: 'Идеи', link: '/ideas' },
      { text: 'Проекты', link: '/projects' }
    ],
    sidebar: [
      {
        text: 'Мои заметки',
        items: [
          { text: 'Главная', link: '/' },
          { text: 'Дни', link: '/daily' },
          { text: 'Идеи', link: '/ideas' },
          { text: 'Проекты', link: '/projects' }
        ]
      }
    ]
  }
})
