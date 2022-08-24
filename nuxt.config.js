import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'u2fPkA4eCxmoae9rZlsqVgtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
