<template>
  <div v-editable="blok" class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center">
    <StoryblokComponent v-for="block in blok.columns" :key="block._uid" :blok="block" />
  </div>
</template>

<script setup>
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });
</script>
