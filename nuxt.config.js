import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'W1vLyxT5rQ15jBpANjnv0gtt',
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
