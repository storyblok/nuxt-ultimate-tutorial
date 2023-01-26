export default defineNuxtConfig({
  ssr: false,
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'xr4OhJ2GGQ6Oco2ugxQn0Att',
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
  generate: {
    routes: ['/es'],
  },
});
