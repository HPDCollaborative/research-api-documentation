import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Research API',
  appearance: false,
  titleTemplate: 'Research API Docs',
  description: 'Documentation detailing the repository research api output.',

  outDir: '../dist',

  markdown: {
    theme: 'dracula',
    lineNumbers: true,
    toc: { level: [2, 3] },
  },

  cleanUrls: 'with-subfolders',

  themeConfig: {
    lastUpdatedText: 'Last Updated',

    nav: [
      {
        text: 'Versions',
        items: [
          { text: '2.3', link: '/2.3/' },
          { text: '2.2', link: '/2.2/' },
        ],
      },
    ],

    sidebar: require('./theme/sidemenu.json'),

    footer: {
      copyright: 'Copyright © 2022. HPD Collaborative, Inc.',
    },
  },
})
