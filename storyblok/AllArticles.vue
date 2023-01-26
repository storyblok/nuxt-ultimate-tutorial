<template>
  <div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">
      {{ blok.title }}
    </h2>
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

<script setup lang="ts">
  import { ISbStoryData } from '@storyblok/vue/dist';

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  });

  const { locale } = useI18n();
  const route = useRoute();

  const isPreview = !!(route.query._storyblok && route.query._storyblok !== '');
  const version = isPreview ? 'draft' : 'published';

  const storyblokApi = useStoryblokApi();
  const { data } = await useAsyncData(
    `${locale.value}--all-articles`,
    // eslint-disable-next-line no-return-await
    async () => await storyblokApi.get(
      'cdn/stories',
      {
        version,
        language: locale.value,
        starts_with: 'blog',
        is_startpage: 0,
      },
    ),
  );
  const articles = useState<ISbStoryData[]>(`${locale.value}-all-articles-story`, () => data.value?.data.stories);
</script>
