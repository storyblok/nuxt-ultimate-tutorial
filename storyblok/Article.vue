<template>
  <div v-editable="blok" class="px-4">
    {{ blok.image }}
    {{ blok.title }}
    {{ blok.subtitle }}
    <div v-html="resolvedRichText"></div>
    <!-- include link, should be Nuxtlink -->
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })

const storyblokApi = useStoryblokApi()
const resolvedRichText = computed(() => storyblokApi.richTextResolver.render(props.blok.content))
</script>
