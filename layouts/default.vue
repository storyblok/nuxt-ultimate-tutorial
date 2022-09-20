<template>
  <main>
    <Header />
    <slot />
  </main>
</template>

<script setup>
let { slug } = useRoute().params

const locales = useState('locales', () => ['en', 'es'])
const isLocale = locales.value.some(loc => loc === slug[0])
useState('locale', () => isLocale ? slug[0] : 'en')
</script>
