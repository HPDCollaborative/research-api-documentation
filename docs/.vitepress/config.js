import { defineConfig } from 'vitepress'
import { currentVersion, versions } from './composables/useVersion.js'

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
        text: `v${currentVersion}`,
        items: [
          {
            text: 'Versions',
            items: versions.map((i) =>
              i.version === currentVersion
                ? {
                    text: `${i.version} (current)`,
                    activeMatch: `/${i.version}/`, // always active
                    link: `/${i.version}/`,
                  }
                : {
                    text: i.version,
                    link: i.link,
                  }
            ),
          },
        ],
      },
    ],

    sidebar: {
      '/2.3/': require('./navs/side2_3.json'),
      '/2.2/': require('./navs/side2_2.json'),
    },

    footer: {
      copyright: 'Copyright © 2022. HPD Collaborative, Inc.',
    },
  },
})
