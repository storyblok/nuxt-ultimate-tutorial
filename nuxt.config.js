import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'xr4OhJ2GGQ6Oco2ugxQn0Att',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
