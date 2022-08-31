<script setup>
let { slug } = useRoute().params

if (slug.length > 1) slug = slug.join('/')

const resolveRelations = ['popular-articles.articles']

const story = await useStoryblok(
  slug ? slug : 'home',
  {
    version: 'draft',
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
