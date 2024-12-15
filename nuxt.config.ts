export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  compatibilityDate: '2024-12-15',
  devServer: {
    host: '0.0.0.0',
  },
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/ui', '@vueuse/nuxt'],
  srcDir: 'src/',
})
