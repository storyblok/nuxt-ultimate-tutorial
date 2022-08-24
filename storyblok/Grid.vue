<template>
  <div
    v-editable="blok"
    class="container mx-auto grid md:grid-cols-3 gap-16 place-items-center"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
