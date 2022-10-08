import { defineNuxtConfig } from 'nuxt/config'

// i18n
import general from "./i18n/general"
import auth from "./i18n/auth"
import menu from "./i18n/menu"
import homepage from "./i18n/homepage"
import catalog from "./i18n/catalog"
import courses from "./i18n/courses"
import aboutUs from "./i18n/about-us"
import reader from "./i18n/reader"
import publish from "./i18n/publish"
import contact from "./i18n/contact"
import roadmap from "./i18n/roadmap"
import journal from "./i18n/journal"
import privacy from "./i18n/privacy"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n',
        'nuxt-windicss',
        '@nuxtjs/color-mode'
    ],

    colorMode: {
        classSuffix: ''
    },

    vite: {
        devBundler: 'legacy'
    },

    vue: {
        compilerOptions: {
            isCustomElement: tag => ['paginate-content'].includes(tag)
        }
    },

    nitro: {
        plugins: ['~/server/plugins/useReferences.js']
    },

    app: {
        head: {
            script: [
                { src: 'https://unpkg.com/paginar@0.1.3/dist/index.es.js', type: 'module'}
            ]
        }
    },

    css: [
        '@/assets/css/fonts/larken.css',
    ],

    i18n: {
        strategy: 'prefix_except_default',

        locales: ['pt'],
        defaultLocale: 'pt',

        vueI18n: {
            legacy: false,
            locale: 'pt',

            messages: {
                en: {
                    ...general.en,
                    menu: menu.en,
                    homepage: homepage.en,
                    catalog: catalog.en,
                    courses: courses.en,
                    aboutUs: aboutUs.en,
                    reader: reader.en,
                    auth: auth.en,
                    publish: publish.en,
                    contact: contact.en,
                    roadmap: roadmap.en,
                    journal: journal.en,
                    privacy: privacy.en,
                },
                pt: {
                    ...general.pt,
                    menu: menu.pt,
                    homepage: homepage.pt,
                    catalog: catalog.pt,
                    courses: courses.pt,
                    aboutUs: aboutUs.pt,
                    reader: reader.pt,
                    auth: auth.pt,
                    publish: publish.pt,
                    contact: contact.pt,
                    roadmap: roadmap.pt,
                    journal: journal.pt,
                    privacy: privacy.pt,
                }
            }
        }
    },

    postcss: {
        plugins: {
            'postcss-nested': {},
        },
    }
})
