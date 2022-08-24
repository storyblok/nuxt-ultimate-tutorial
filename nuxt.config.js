import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'TxjwDdrurDCNvQwkIyREVwtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
