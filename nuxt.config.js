export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'MX4ACP2TErhMWLJh8QIFlwtt',
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
