/* eslint-disable import/no-duplicates */
import { ISbStoryData } from '@storyblok/vue/dist';
import { apiPlugin } from '@storyblok/vue';

export interface Blok {
  story: ISbStoryData;
  stories: ISbStoryData[];
  cv: number,
}

export const useStoryblokRawFetchStories = async (storyblokApiToken: string, params?: any) => {
  const { storyblokApi } = apiPlugin({ apiOptions: { accessToken: storyblokApiToken } });

  let pages = 0;
  const stories: ISbStoryData[] = [];
  const pageInfo = await storyblokApi.get('cdn/stories/', params);

  stories.push(...(pageInfo.data.stories as ISbStoryData[]));
  const { total } = pageInfo.headers;
  const perPage = pageInfo.headers.per_page || total > 25 ? 25 : null;

  if (perPage) {
    pages = Math.ceil(total / perPage);
  }

  for (let page = 2; page <= pages; page += 1) {
    const pageInfo2 = await storyblokApi.get('cdn/stories/', {
      ...params,
      page,
    });
    stories.push(...(pageInfo2.data.stories as ISbStoryData[]));
  }
  return stories;
};

export const useStoryblokRawFetchDynamicRoutes = async (storyblokApiToken: string, language: string) => {
  const data = await useStoryblokRawFetchStories(
    storyblokApiToken,
    {
      version: 'published',
      language,
    },
  );
  return data.map((story) => {
    let path = '';
    if (story.path) {
      path = story.path;
    } else if (story.full_slug) {
      path = `/${story.full_slug}`;
    } else {
      path = `/${story.slug}`;
    }
    if (path.slice(-1) !== '/') {
      return `${path}/`;
    }
    return path;
  }) as string[];
};
