// Preview & Production approach: Remove this file 🗑️
export default defineNuxtPlugin((nuxtApp) => {
	const route = useRoute();
	const preview = route.query?._storyblok || false;

	if (preview) {
		nuxtApp.hook('page:finish', () => { refreshNuxtData() });
	}

	return { provide: { preview } };
});