// import { useAsyncData, useState, onMounted } from '#imports';
import { useStoryblokApi, useStoryblokBridge } from '@storyblok/vue';
// https://github.com/storyblok/storyblok-nuxt/pull/280
import type { ISbStoryData, ISbError, ISbResult } from '@storyblok/vue';

export const useCustomAsyncStoryblok = async (
  url: string,
  apiOptions = {},
  bridgeOptions = {},
) => {
  const uniqueKey = `${JSON.stringify(apiOptions)}${url}`;
  // https://github.com/storyblok/storyblok-nuxt/pull/280
  const story = useState<ISbStoryData>(`${uniqueKey}-state`, () => ({} as ISbStoryData));
  const storyblokApiInstance = useStoryblokApi();

  onMounted(() => {
    if (story.value && story.value.id) {
      useStoryblokBridge(
        story.value.id,
        evStory => (story.value = evStory),
        bridgeOptions,
      );
    }
  });

  await useAsyncData<ISbResult, ISbError>(
    `${uniqueKey}-asyncdata`,
    async () => await storyblokApiInstance.get(`cdn/stories/${url}`, apiOptions),
  ).then((response) => {
    const { data, error } = response;
    const storyblokData = data.value as ISbResult;
    const storyblokError = error.value as ISbError;
    if (storyblokError) {
      if (storyblokError.response.status >= 400 && storyblokError.response.status < 600) {
        throw new Error(storyblokError.message.message);
      }
    }
    story.value = storyblokData.data.story;
  }).catch((error) => {
    console.error('error', error);
  });
  return story;
};
