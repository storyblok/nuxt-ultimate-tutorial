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
  // https://github.com/storyblok/storyblok-nuxt/pull/280  const uniqueKey = `${JSON.stringify(apiOptions)}${url}`;
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
  console.log(`cdn/stories/${url}`);
  // console.log(await storyblokApiInstance.get(`cdn/stories/${url}`, apiOptions));
  const {
    data, pending, error, refresh,
  } = await useAsyncData(
    'mountains',
    () => $fetch('https://api.nuxtjs.dev/mountains'),
  );
  // const {
  //   data, pending, error, refresh,
  // } = await useAsyncData(
  //   `${uniqueKey}-asyncdata`,
  //   async () => {
  //     console.log('async data handler');
  //     await storyblokApiInstance.get(`cdn/stories/${url}`, apiOptions);
  //   },
  // )/* .then((response) => {
  //   console.log(response);
  //   const { data, error } = response;
  //   console.log(data.value);
  //   console.log(error);
  //   const storyblokData = data.value as Object;
  //   console.log(storyblokData);
  //   const storyblokError = error.value as Object;
  //   console.log(storyblokError);
  //   // if (storyblokError) {
  //   //   if (storyblokError.response.status >= 400 && storyblokError.response.status < 600) {
  //   //     throw createError({ statusCode: storyblokError.response.status, statusMessage: storyblokError.message.message });
  //   //   }
  //   // }
  //   // story.value = storyblokData.data.story;
  // }) */;
  console.log(JSON.stringify(data.value));
  console.log(data);
  console.log(pending);
  console.log(error);
  console.log(refresh);
  return story;
};
