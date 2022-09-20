<script setup>
let { slug } = useRoute().params
if (slug.length > 1) slug = slug.join('/')

onBeforeMount(() => {
  useState('locale').value = 'es'
})

const resolveRelations = ['popular-articles.articles']

const story = await useStoryblok(
  slug ? slug : 'home',
  {
    version: 'draft',
    language: 'es',
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
