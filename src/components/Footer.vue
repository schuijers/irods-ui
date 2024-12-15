<template>
  <footer class="flex h-[var(--header-height)] items-center border-t px-6 dark:border-gray-800">
    <a
      class="text-sm text-gray-500 dark:text-gray-400"
      href="https://github.com/schuijers/irods-ui"
      rel="noopener noreferrer"
      target="_blank"
    >
      Built with ❤️ by <span class="text-gray-900 dark:text-white">Martijn Schuijers</span>
    </a>

    <ISpacer />

    <UButton
      aria-label="iRODS UI on GitHub"
      color="gray"
      icon="i-simple-icons-github"
      size="sm"
      square
      target="_blank"
      to="https://github.com/schuijers/irods-ui"
      variant="ghost"
    />
  </footer>
</template>
