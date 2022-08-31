<template>
  <div class="container">
    {{ blok.headline }}
    <div class="grid grid-cols-3 gap-12">
      <ArticleCard v-for="blok in blok.articles" :key="blok.uuid" :article="blok.content" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
