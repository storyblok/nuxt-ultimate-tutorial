<script setup>
const route = useRoute()
let { slug } = route.params

const { locale } = useI18n()
const resolveRelations = ['popular-articles.articles']

// Preview and Production environments SSR
const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'
const version = route.query._storyblok && isPreview ? 'draft' : 'published'

const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const story = await useAsyncStoryblok(url.replace(/\/$/, ''),
  {
    version,
    language: locale.value,
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
