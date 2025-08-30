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
    () => queryCollection('content').path(route.path).first()
)

// Handle dynamic import with error catching
let bookSettings = {}
try {
    if (isbn !== '.well-known') {
        console.log('\n\n\nimporting settings', isbn)

        if (isbn === '9786599492900') {
            bookSettings = book9786599492900
        } else if (isbn === '9786599492907') {
            bookSettings = book9786599492907
        } else if (isbn === '9786599492938') {
            bookSettings = book9786599492938
        }
        console.log('settings imported!!!', { bookSettings: bookSettings })
    }
} catch (error) {
    console.warn(`Settings file not found for ISBN ${isbn}, using defaults`)
}

const settings = reactive(bookSettings || {})
const classList = ref('')

const summary = computed(() => (
    bookPages.value.map(item => ({
        title: item.title || (item.path || '').split('/').pop(),
        link: item.path || item._path
    }))
))

const bookContent = computed(() => ({
    summary: summary.value,
    footnotes: bookSettings?.footnotes ?? [],
    references: bookSettings?.references ?? []
}))

watch(() => route.params.slug, async () => {
    const { path } = useRoute()
    console.log({ path, isbn, slug: route.params.slug })

    if (!route.params.slug) {
        router.push(`/${isbn}/cover`)
    } else {
        if (isbn) {
            const newDoc = await queryCollection('content').path(path).first()
            doc.value = newDoc
        }
    }
})

onMounted(() => {
    if (!route.params.slug) {
        window.location.href = `/${isbn}/cover`
    } else {
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
    }
})

useHead({
    title: doc?.value?.title
        ? doc.value.title
        : 'Editora Sabiá'
})
</script>

<template>
    <main class="w-full h-screen">
        <paginate-content
            v-if="doc"
            id="pagination-el"
            :reader-blocked="readerSettings.blocked.value === true ? true : null"
            :book-title="doc?.title || ''"
            :reader-settings="JSON.stringify(settings)"
            :book-content="JSON.stringify(bookContent)"
            :root-class="doc?.title ? slugify(doc.title).toLocaleLowerCase() : ''"
            :css-string="bookSettings?.cssString ?? ''"
        >
            <div slot="header">
                <p class="text-white">{{ doc?.title || '' }}</p>
            </div>

            <div slot="optionsBottom">
                <div class="my-3 border-b border-gray-100"></div>
                <a href="https://sabia.pub" target="_blank" title="Sobre a Editora"
                    class="w-full block text-black text-center text-xs py-2 px-3 hover:bg-gray-100 rounded">
                    <img src="https://sabia.pub/images/logo.svg" style="height: 48px; margin: 0 auto; display: block;">
                </a>
            </div>

            <div slot="content" class="contentSlot" :class="classList">
                <ContentRenderer :key="route.path" :value="doc" />
            </div>
        </paginate-content>
    </main>
</template>
