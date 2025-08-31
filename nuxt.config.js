import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['paginate-content'].includes(tag)
    }
  },

  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/paginar@0.2.8/dist/index.es.js', type: 'module', rel: 'modulepreload'}
      ]
    }
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/components.css',
    '@/assets/css/fonts/faune.css',
    '@/assets/css/fonts/larken.css'
  ],

  // SSG Configuration for Nuxt 4 + Content v3
  nitro: {
    prerender: {
      // Explicit route definition ensures all content routes are pre-rendered
      // Content v3 + Nuxt 4 automatically discovers routes, but explicit is safer
      routes: [
        '/',
        '/9786599492900/cover',
        '/9786599492900/prefacio',
        '/9786599492900/nascimento',
        '/9786599492900/moreira',
        '/9786599492900/rossato',
        '/9786599492900/pinto-e-silva',
        '/9786599492900/gusmao',
        '/9786599492900/oliveira',
        '/9786599492900/matos',
        '/9786599492900/maciel',
        '/9786599492907/cover',
        '/9786599492907/prefacio',
        '/9786599492907/carta-a-primeira-edicao',
        '/9786599492907/mas-afinal',
        '/9786599492907/estudos-decoloniais',
        '/9786599492907/estudos-culturais',
        '/9786599492907/design-decolonial',
        '/9786599492907/consideracoes-finais',
        '/9786599492907/referencias',
        '/9786599492938/cover',
        '/9786599492938/gratitudes',
        '/9786599492938/preface',
        '/9786599492938/introduction',
        '/9786599492938/part-a',
        '/9786599492938/part-b',
        '/9786599492938/part-c',
        '/9786599492938/references'
      ]
    }
  },

  // Ensure all routes are pre-rendered by default
  routeRules: {
    '/**': { prerender: true }
  }
})
