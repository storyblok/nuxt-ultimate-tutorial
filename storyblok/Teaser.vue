<template>
  <div v-editable="blok" class="py-24 text-6xl text-[#50b0ae] font-bold text-center">
    {{ blok.headline }}
  </div>
</template>

<script setup lang="ts">
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });
</script>
