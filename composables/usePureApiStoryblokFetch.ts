import { ISbStoryData } from '@storyblok/vue/dist';

export interface Blok {
  story: ISbStoryData;
  stories: ISbStoryData[];
  cv: number,
}

export const useStoryblokFetch = async (slug: string, params?: any) => {
  const config = useRuntimeConfig();

  const { data: result } = await useAsyncData(
    `${slug}-${new URLSearchParams(params)}`,
    async () => {
      let pages = 0;
      const stories: ISbStoryData[] = [];

      await $fetch.raw(`https://api.storyblok.com/v2/cdn/stories/${slug}?token=${config.public.STORYBLOK_API_TOKEN}&${new URLSearchParams(params)}`).then((res) => {
        if (!res._data) { return; }
        if (res._data.story) {
          stories.push(res._data.story);
        } else {
          const total = res.headers.get('total');
          const perPage = res.headers.get('per_page') || total > 25 ? 25 : null;

          if (perPage) {
            pages = Math.ceil(total / perPage);
          }

          stories.push(...(res._data.stories as ISbStoryData[]));
        }
      });

      for (let page = 2; page <= pages; page += 1) {
        await $fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?token=${config.public.STORYBLOK_API_TOKEN}&${new URLSearchParams({ ...params, page })}`).then((res) => {
          stories.push(...(res.stories as ISbStoryData[]));
        });
      }

      return {
        stories,
        story: stories[0],
      };
    },
  );
  const blok = result.value as Blok;
  return blok;
};
