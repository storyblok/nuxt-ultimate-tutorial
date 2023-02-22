<template>
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink :to="localePath('/')">
        <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Nuxt</h1>
      </NuxtLink>
      <nav>
        <ul class="flex space-x-8 text-lg font-bold">
          <li>
            <NuxtLink :to="localePath('/blog')" class="hover:text-[#50b0ae]">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')" class="hover:text-[#50b0ae]">About</NuxtLink>
          </li>
          <li v-for="lang in availableLocales" :key="lang">
            <NuxtLink :to="switchLocalePath(lang)" class="uppercase">
              {{ lang }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>
