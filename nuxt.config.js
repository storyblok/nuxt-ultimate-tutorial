import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'MX4ACP2TErhMWLJh8QIFlwtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
