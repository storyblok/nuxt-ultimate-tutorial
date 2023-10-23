<template>
  <div v-editable="blok" class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.title }}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
      <ArticleCard
        v-for="article in articles"
        :key="article.uuid"
        :article="article.content"
        :slug="article.full_slug"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })

const { $preview } = useNuxtApp() // Preview & Production approach: "const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'"

const { locale } = useI18n()
const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get('cdn/stories', {
  version: $preview ? 'draft' : 'published', // Preview & Production approach: "isPreview ? 'draft' : 'published'"
  language: locale.value,
  starts_with: 'blog',
  is_startpage: false,
})
const articles = ref(data.stories)
</script>
