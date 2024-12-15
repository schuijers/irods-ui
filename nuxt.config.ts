export default defineNuxtConfig({
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
