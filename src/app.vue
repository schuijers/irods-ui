<template>
  <IHeader />

  <IMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </IMain>

  <IFooter />
</template>

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
