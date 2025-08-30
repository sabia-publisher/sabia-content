import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        'nuxt-windicss'
    ],

    vue: {
        compilerOptions: {
            isCustomElement: tag => ['paginate-content'].includes(tag)
        }
    },

    vite: {
        devBundler: 'legacy'
    },

    app: {
        head: {
            script: [
                { src: 'https://unpkg.com/paginar@0.2.8/dist/index.es.js', type: 'module'}
            ]
        }
    },

    css: [
        '@/assets/css/fonts/faune.css',
        '@/assets/css/fonts/larken.css',
    ],

    postcss: {
        plugins: {
            'postcss-nested': {},
        },
    }
})
