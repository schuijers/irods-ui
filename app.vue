<template>
  <div>
    <h1>iRODS UI</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})
</script>

<style>
html {
  @apply h-full scroll-smooth antialiased;
}

body {
  @apply min-h-full;
}
</style>
