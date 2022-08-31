<template>
  <div class="container">
    {{ blok.title }}
    <div class="grid grid-cols-3 gap-12">
      <ArticleCard v-for="blok in articles" :key="blok.uuid" :article="blok.content" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })

const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'blog',
})
articles.value = data.stories.filter((story) => story.is_startpage !== true)
</script>
