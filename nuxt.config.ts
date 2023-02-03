import { NuxtI18nOptions } from '@nuxtjs/i18n';
import { useStoryblokRawFetchDynamicRoutes } from './composables/useStoryblokRawFetch';

const storyblokApiToken = 'xr4OhJ2GGQ6Oco2ugxQn0Att';

const i18nConfig = {
  strategy: 'prefix_except_default',
  locales: ['en', 'es'],
  defaultLocale: 'en', // default locale
} as NuxtI18nOptions;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      STORYBLOK_API_TOKEN: storyblokApiToken,
    },
  },
  // ssr: false,
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: storyblokApiToken,
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: i18nConfig,
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev || !i18nConfig) { return; }
      // ..Async logic..
      for (const locale of i18nConfig.locales) {
        const dynamicRoutes = await useStoryblokRawFetchDynamicRoutes(storyblokApiToken, locale);
        console.log(dynamicRoutes);
        nitroConfig?.prerender?.routes?.push(...dynamicRoutes);
      }
    },
  },
});
