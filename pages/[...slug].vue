<script setup>
  const { slug } = useRoute().params;

  const { locale } = useI18n();
  const storyblokApiInstance = useStoryblokApi();
  const resolveRelations = ['popular-articles.articles'];

  const url = slug && slug.length > 0 ? slug.join('/') : 'home';

  const { data } = await useAsyncData(
    `${locale.value}-${url}`,
    async () => await storyblokApiInstance.get(
      `cdn/stories/${url}`,
      {
        version: 'draft',
        language: locale.value,
        resolve_relations: resolveRelations,
      },
    ),
  );

  const story = useState(`${locale.value}-${url}-story`, () => data.value.data.story);

  onMounted(() => {
    if (story.value && story.value.id) {
      useStoryblokBridge(
        story.value.id,
        evStory => (story.value = evStory),
        {
          resolveRelations,
        },
      );
    }
  });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
