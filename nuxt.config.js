import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-09-07',

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
            link: [
                // Aggressive preloading for fastest possible load
                { rel: 'dns-prefetch', href: 'https://unpkg.com' },
                { rel: 'preconnect', href: 'https://unpkg.com', crossorigin: true },
                { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true }, // Backup CDN
                // Preload the critical script as high priority
                {
                    rel: 'preload',
                    href: 'https://unpkg.com/paginar@0.3.3/dist/index.es.js',
                    as: 'script',
                    crossorigin: true
                }
            ],
            script: [
                {
                    src: 'https://unpkg.com/paginar@0.3.3/dist/index.es.js',
                    type: 'module',
                    // Blocking load - no async/defer since component is crucial
                    // High priority loading
                    fetchpriority: 'high'
                }
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
                '/9786583942494/cover',
                '/9786583942494/prefacio',
                '/9786583942494/nascimento',
                '/9786583942494/moreira',
                '/9786583942494/rossato',
                '/9786583942494/pinto-e-silva',
                '/9786583942494/gusmao',
                '/9786583942494/oliveira',
                '/9786583942494/matos',
                '/9786583942494/maciel',
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
                '/9786599492938/references',
                '/9786583942449/cover',
                '/9786583942449/apresentacao',
                '/9786583942449/ribeiro',
                '/9786583942449/preto'
            ]
        }
    },

    // Ensure all routes are pre-rendered by default
    routeRules: {
        '/**': { prerender: true }
    },

    // Performance optimizations for critical paginar loading
    experimental: {
        payloadExtraction: false, // Reduces payload size for SSG
        inlineSSRStyles: false    // Prevents CSS inlining which can delay script loading
    },

    // Optimize for critical resource loading
    render: {
        resourceHints: true, // Enable resource hints
        http2: {
            push: true, // Enable HTTP/2 push for critical resources
            pushAssets: (req, res, publicPath, preloadFiles) =>
                preloadFiles
                    .filter(f => f.asType === 'script' && f.file.includes('paginar'))
                    .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
        }
    },

    // Optimize build for better loading
    vite: {
        build: {
            rollupOptions: {
                external: ['paginar'] // Don't bundle external modules
            }
        }
    }
})
