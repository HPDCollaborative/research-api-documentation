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
        items: require('./navs/versions.json'),
      },
    ],

    sidebar: {
      '/main/': require('./navs/sideMain.json'),
      '/2.2/': require('./navs/side2_2.json'),
    },

    footer: {
      copyright: 'Copyright © 2022. HPD Collaborative, Inc.',
    },
  },
})
