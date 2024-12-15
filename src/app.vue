<template>
  <IHeader />

  <IMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </IMain>

  <IFooter />
</template>

<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - iRODS UI` : 'iRODS UI'
  },
})
</script>

<style>
:root {
  --footer-height: 4rem;
  --header-height: 4rem;
}

html {
  @apply h-full scroll-smooth antialiased;
}

body {
  @apply min-h-full dark:bg-gray-900;
}
</style>
