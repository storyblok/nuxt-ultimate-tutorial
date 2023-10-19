<script setup>
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'

// API options
const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';
const { locale } = useI18n()
const resolveRelations = ['popular-articles.articles']

// Full Static with refresh approach
const { data: story, pending } = await useAsyncData(
  `${locale.value}-${url}`,
  async () => {
    const { data } = await useStoryblokApi().get(`cdn/stories/${url.replace(/\/$/, '')}`, {
      version: isPreview ? 'draft' : 'published',
      language: locale.value,
      resolve_relations: resolveRelations
    })
    return data?.story
  },
);

if (!isPreview) {
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" })
  }
}

// Load the brigde in preview mode
onMounted(() => {
  if (isPreview && story.value && story.value.id) {
    useStoryblokBridge(
      story.value.id,
      (evStory) => story.value = evStory,
      {
        resolveRelations,
      }
    );
  }
});
</script>

<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>
