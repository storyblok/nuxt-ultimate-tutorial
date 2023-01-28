<script setup lang="ts">
  import { ISbStoryData } from '@storyblok/vue/dist';

  const route = useRoute();
  const { locale } = useI18n();

  let story = {} as ISbStoryData;

  try {
    const currentRoute = { ...route };
    const localeString = `/${locale.value}`;
    if (currentRoute.path.startsWith(localeString)) {
      currentRoute.path = currentRoute.path.slice(localeString.length);
    }
    if (currentRoute.path === '/') {
      currentRoute.path = 'home';
    }
    currentRoute.path = currentRoute.path.replace(/(^\/+|\/+$)/mg, '');

    const isPreview = !!(currentRoute.query._storyblok && currentRoute.query._storyblok !== '');
    const version = isPreview ? 'draft' : 'published';

    await useCustomAsyncStoryblok(currentRoute.path, {
      version,
      language: locale.value,
      resolve_relations: 'popular-articles.articles',
    }, {
      preventClicks: true,
    }).then((res) => {
      if (res) {
        story = res.value;
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
</script>

<template>
  <StoryblokComponent v-if="story.content" :blok="story.content" />
</template>
