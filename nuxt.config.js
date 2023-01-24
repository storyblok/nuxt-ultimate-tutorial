export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'u2fPkA4eCxmoae9rZlsqVgtt',
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
