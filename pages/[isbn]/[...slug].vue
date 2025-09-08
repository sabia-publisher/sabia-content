<script setup>
import slugify from 'slugify'

import usePageFull from '../../composables/usePageFull'
import readerSettings from '../../composables/readerSettings'

import book9786583942494 from '../../content/9786583942494/.settings/index.js'
import book9786599492907 from '../../content/9786599492907/.settings/index.js'
import book9786599492938 from '../../content/9786599492938/.settings/index.js'
import book9786583942449 from '../../content/9786583942449/.settings/index.js'

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
        if (isbn === '9786583942494') {
            bookSettings = book9786583942494
        } else if (isbn === '9786599492907') {
            bookSettings = book9786599492907
        } else if (isbn === '9786599492938') {
            bookSettings = book9786599492938
        } else if (isbn === '9786583942449') {
            bookSettings = book9786583942449
        }
    }
} catch (error) {
    console.warn(`Settings file not found for ISBN ${isbn}, using defaults`)
}

const settings = reactive(bookSettings || {})
const classList = ref('')
const paginarLoaded = ref(false)
const paginarReady = ref(false)

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

// Function to check if paginar is loaded and ready
const checkPaginarReady = () => {
    return new Promise((resolve) => {
        const checkElement = () => {
            // Check if custom element is defined
            if (customElements.get('paginate-content')) {
                paginarLoaded.value = true

                // Wait for the element to be fully initialized
                nextTick(() => {
                    const paginateElement = document.querySelector('paginate-content')
                    console.log({ paginateElement })
                    if (paginateElement?.shadowRoot) {
                        const targetNode = paginateElement.shadowRoot.querySelector('#rootComponent')
                        console.log({ targetNode })
                        if (targetNode) {
                            paginarReady.value = true
                            resolve(true)
                        } else {
                            // If shadowRoot exists but rootComponent doesn't, wait a bit more
                            setTimeout(checkElement, 50)
                        }
                    } else {
                        // Element exists but shadowRoot not ready, wait
                        setTimeout(checkElement, 50)
                    }
                })
            } else {
                // Custom element not yet defined, wait
                setTimeout(checkElement, 50)
            }
        }
        checkElement()
    })
}

onMounted(async () => {
    if (!route.params.slug) {
        if (process.client) {
            window.location.href = `/${isbn}/cover`
        }
    } else {
        if (process.client) {
            // Wait for paginar to be fully loaded and ready
            await checkPaginarReady()

            // Now set up the observers and functionality
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
        <!-- Loading State - Show while paginar is loading -->
        <div v-if="!paginarReady && doc" class="w-full h-screen flex flex-col items-center justify-between bg-areia">
            <header class="bg-primary flex justify-center items-center p-4 bg-terra w-full h-[82px] text-center">
                <p class="text-white text-center text-sm">
                    {{ doc?.navigation?.title || doc?.title || 'Carregando...' }}
                </p>
            </header>
            <div class="text-center h-full flex flex-col items-center justify-center">
                <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-laranjeira mb-4"></div>
                <p class="text-gray-500">Carregando...</p>
            </div>
        </div>

        <ClientOnly>
            <paginate-content v-if="doc" v-show="bookSettings?.cssString" id="pagination-el"
                :reader-blocked="readerSettings.blocked.value === true ? true : null"
                :book-title="doc?.navigation?.title || doc?.title || ''" :reader-settings="JSON.stringify(settings)"
                :book-content="JSON.stringify(content)"
                :root-class="doc?.navigation?.title ? slugify(doc.navigation.title).toLocaleLowerCase() : ''"
                :css-string="bookSettings?.cssString ?? ''">
                <div slot="header">
                    <p class="text-white hidden md:block">{{ doc?.navigation?.title || doc?.title || '' }}</p>
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
