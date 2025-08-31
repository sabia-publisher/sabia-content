<script setup>
import slugify from 'slugify'
import usePageFull from '../../composables/usePageFull'
import readerSettings from '../../composables/readerSettings'

import book9786599492900 from '../../content/9786599492900/.settings/index.js'
import book9786599492907 from '../../content/9786599492907/.settings/index.js'
import book9786599492938 from '../../content/9786599492938/.settings/index.js'

const route = useRoute()
const router = useRouter()

const isbn = route.params.isbn

// Build navigation for current ISBN and load current document (Nuxt Content v3)
const { data: allContent } = await useAsyncData('all-content', () => queryCollection('content').all())
const bookPages = computed(() => {
    const items = (allContent.value || []).filter(item => (item.path || '').startsWith(`/${isbn}/`))
    return items
})

const { data: doc } = await useAsyncData(
    `content-${route.path}`,
    async () => {
        const content = await queryCollection('content').path(route.path).first()
        return content
    }
)


// Handle dynamic import with error catching
let bookSettings = {}
try {
    if (isbn !== '.well-known') {
        if (isbn === '9786599492900') {
            bookSettings = book9786599492900
        } else if (isbn === '9786599492907') {
            bookSettings = book9786599492907
        } else if (isbn === '9786599492938') {
            bookSettings = book9786599492938
        }
    }
} catch (error) {
    console.warn(`Settings file not found for ISBN ${isbn}, using defaults`)
}

const settings = reactive(bookSettings || {})
const classList = ref('')

const content = reactive({
    summary: bookPages.value?.map(item => ({
        title: item.navigation?.title || item.title,
        author: item.navigation?.author || item.author,
        link: item.path
    })) || [],
    footnotes: bookSettings?.footnotes ?? [],
    references: bookSettings?.references ?? []
})

watch(() => route.params.slug, async () => {
    const { path } = useRoute()

    if (!route.params.slug) {
        router.push(`/${isbn}/cover`)
    } else {
        if (isbn) {
            try {
                // CORRECT v3 API: queryCollection(path).first()
                const newContent = await queryCollection('content').path(path).first()
                doc.value = newContent
            } catch (error) {
                console.warn('Content update error:', error)
            }
        }
    }
})

onMounted(() => {
    if (!route.params.slug) {
        if (process.client) {
            window.location.href = `/${isbn}/cover`
        }
    } else {
        if (process.client) {
            // Wait for custom element to be ready
            nextTick(() => {
                const paginateElement = document.querySelector('paginate-content')
                if (paginateElement?.shadowRoot) {
                    const targetNode = paginateElement.shadowRoot.querySelector('#rootComponent')

                    if (targetNode) {
                        classList.value = targetNode.classList.toString()

                        const observer = new MutationObserver(() => {
                            classList.value = targetNode.classList.toString()
                        })
                        observer.observe(targetNode, { attributes: true })
                    }
                }

                const newHeight = usePageFull.getHeight()
                usePageFull.setHeight(newHeight)
            })
        }
    }
})

useHead({
    title: doc?.value?.title || doc?.value?.navigation?.title || 'Editora Sabiá'
})
</script>

<template>
    <main class="w-full h-screen">
        <ClientOnly>
            <paginate-content v-if="doc" v-show="bookSettings?.cssString" id="pagination-el"
                :reader-blocked="readerSettings.blocked.value === true ? true : null"
                :book-title="doc?.navigation?.title || doc?.title || ''" :reader-settings="JSON.stringify(settings)"
                :book-content="JSON.stringify(content)"
                :root-class="doc?.navigation?.title ? slugify(doc.navigation.title).toLocaleLowerCase() : ''"
                :css-string="bookSettings?.cssString ?? ''"
            >
                <div slot="header">
                    <p class="text-white">{{ doc?.navigation?.title || doc?.title || '' }}</p>
                </div>

                <div slot="optionsBottom">
                    <div class="my-3 border-b border-gray-100"></div>
                    <a href="https://sabia.pub" target="_blank" title="Sobre a Editora"
                        class="w-full block text-black text-center text-xs py-2 px-3 hover:bg-gray-100 rounded">
                        <img src="https://sabia.pub/images/logo.svg"
                            style="height: 48px; margin: 0 auto; display: block;">
                    </a>
                </div>

                <div slot="content" class="contentSlot" :class="classList">
                    <!-- CRITICAL: Keep ContentRenderer for custom slot-based content -->
                    <!-- Do NOT replace with ContentDoc as this is custom slot content -->
                    <ContentRenderer :key="route.path" :value="doc" />
                </div>
            </paginate-content>

            <template #fallback>
                <div v-if="doc" class="w-full h-screen flex flex-col bg-white">
                    <header class="bg-gray-800 text-white p-4">
                        <h1 class="text-xl font-bold">{{ doc?.navigation?.title || doc?.title || '' }}</h1>
                    </header>
                    <main class="flex-1 p-6 overflow-auto">
                        <div class="max-w-4xl mx-auto">
                            <ContentRenderer :key="route.path" :value="doc" />
                        </div>
                    </main>
                    <footer class="border-t p-4 text-center">
                        <a href="https://sabia.pub" target="_blank" class="text-blue-600 hover:text-blue-800">
                            <img src="https://sabia.pub/images/logo.svg" alt="Editora Sabiá" class="h-12 mx-auto">
                        </a>
                    </footer>
                </div>
            </template>
        </ClientOnly>
    </main>
</template>
