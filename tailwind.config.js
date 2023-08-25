module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
