import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'xr4OhJ2GGQ6Oco2ugxQn0Att',
        use: [apiPlugin]
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'es'],
    defaultLocale: 'en', // default locale
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  // Preview and Production environments (SSR mode)
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
  },
})
