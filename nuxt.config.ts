import { NuxtI18nOptions } from '@nuxtjs/i18n';

const i18nConfig = {
  strategy: 'prefix_except_default',
  locales: ['en', 'es'],
  defaultLocale: 'en', // default locale
} as NuxtI18nOptions;

export default defineNuxtConfig({
  // ssr: false,
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
  i18n: i18nConfig,
  generate: {
    routes: ['/es'],
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      console.log(i18nConfig);
      // if (nitroConfig.dev) { return; }
      // ..Async logic..
      // const dynamicRoutes = await useStoryblokRawFetchDynamicRoutes(process.env.STORYBLOK_API_TOKEN as string);
      // nitroConfig?.prerender?.routes?.push(...dynamicRoutes);
    },
  },
});
