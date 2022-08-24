import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'U4mv54ozRXmfv2EraUpiTwtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
