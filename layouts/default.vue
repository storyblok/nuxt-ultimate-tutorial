<template>
  <main>
    <Header />
    <slot />
  </main>
</template>

<script setup>
useState('locale', () => 'en')
</script>

