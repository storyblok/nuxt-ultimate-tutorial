<script setup lang="ts">
  import { ISbStoryData } from '@storyblok/vue/dist';

  const route = useRoute();
  const { locale, locales } = useI18n();
  let calculatedLocale = locale.value;

  const currentRoute = { ...route };
  locales.value.forEach((loc) => {
    const internalLoc = loc as string;
    if (currentRoute.path.startsWith(`/${internalLoc}`)) {
      console.log(internalLoc);
      calculatedLocale = internalLoc;
    }
  });
  currentRoute.path = currentRoute.path.replace(new RegExp(`^/${calculatedLocale}`, 'mg'), '');
  /* if (currentRoute.path.startsWith(localeString)) {
    currentRoute.path = currentRoute.path.slice(localeString.length);
  } */
  if (currentRoute.path === '/') {
    currentRoute.path = 'home';
  }
  currentRoute.path = currentRoute.path.replace(/(^\/+|\/+$)/mg, '');

  const isPreview = !!(currentRoute.query._storyblok && currentRoute.query._storyblok !== '');
  const version = isPreview ? 'draft' : 'published';

  console.log('path:', currentRoute.path);
  console.log('version:', version);
  console.log('language:', calculatedLocale);

  const story = await useCustomAsyncStoryblok(currentRoute.path, {
    version,
    language: calculatedLocale,
    resolve_relations: 'popular-articles.articles',
  }, {
    preventClicks: true,
  });
  console.log(story.value);
</script>

<template>
  <StoryblokComponent v-if="story.content" :blok="story.content" />
</template>
