<template>
  <div class="bg-zinc-100">
    {{ article.title }}
    {{ article.subtitle }}
    {{ article.image.filename }}
    <!-- {{ article.content }} -->
  </div>
</template>

<script setup>
defineProps({ article: Object })
</script>
