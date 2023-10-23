import { apiPlugin } from '@storyblok/vue'

export default defineNuxtConfig({
  // Preview & Production approach: Uncomment this 👇🏼
  // ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
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
  // Preview & Production approach: Uncomment this 👇🏼
  /* runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV
    }
  }, */
})
