<script setup>
let { slug } = useRoute().params

const locales = useState('locales')
const locale = useState('locale')
const isLocale = locales.value.some(loc => loc === slug[0])
if (isLocale) slug.shift()

if(slug) slug = slug.join('/')

const resolveRelations = ['popular-articles.articles']

const story = await useStoryblok(
  slug ? slug : 'home',
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
