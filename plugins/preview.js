export default defineNuxtPlugin((nuxtApp) => {
	const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';
	const preview = useRoute().query?._storyblok && isPreview || false;

	if (preview) {
		nuxtApp.hook('page:finish', () => { refreshNuxtData() });
	}

	return { provide: { preview } };
});