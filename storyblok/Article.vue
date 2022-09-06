<template>
  <div v-editable="blok">
    <img
      v-if="blok.image?.filename"
      :src="blok.image.filename + '/m/1600x0'"
      :alt="blok.image.alt"
      class="w-full h-[360px] lg:h-[450px] object-cover"
    />
    <div class="container mx-auto mb-12">
      <h1 class="text-6xl text-[#50b0ae] font-bold mt-12 mb-4">{{ blok.title }}</h1>
      <h2 class="text-2xl text-[#1d243d] font-bold mb-4">
        {{ blok.subtitle }}
      </h2>
      <div v-html="resolvedRichText" class="prose"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>
