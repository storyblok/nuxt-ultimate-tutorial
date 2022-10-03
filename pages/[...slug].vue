<script setup>
let { slug } = useRoute().params

const locales = useState('locales')
const locale = useState('locale')
const isLocale = locales.value.some(loc => loc === slug[0])
if (isLocale) slug.shift()

const resolveRelations = ['popular-articles.articles']

const story = await useStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
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
