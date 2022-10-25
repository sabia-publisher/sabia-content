<script setup>
import slugify from 'slugify'
import usePageFull from '../../composables/usePageFull'
import readerSettings from '../../composables/readerSettings'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const route = useRoute()

console.log(route.params)

const isbn = route.params.isbn
const book = navigation.value.find(item => item.title === isbn)

// const references = await import(`../content/${isbn}/.references.js`)

const { data } = await useAsyncData(`content-${route.path}`, () => {
    return queryContent()
        .where({ _path: route.path })
        .findOne()
})

const bookSettings = await import(`../../content/${isbn}/.settings/index.js`)
// data.value.body = useReferences(data.value.body, references)

const settings = reactive(bookSettings.default)
const classList = ref('')

const content = reactive({
    summary: book.children.map(item => ({ title: item.title, link: item._path })),
    footnotes: bookSettings.default?.footnotes ?? [],
    references: bookSettings.default?.references ?? []
})

watch(() => route.params.slug, async () => {
    const { path } = useRoute()
    const newContent = await queryContent()
        .where({ _path: path })
        .findOne()

    data.value = newContent
})

onMounted(() => {
    const targetNode = document
        .querySelector('paginate-content')
        .shadowRoot.querySelector('#rootComponent')

    classList.value = targetNode.classList.toString()

    const observer = new MutationObserver(() => {
        classList.value = targetNode.classList.toString()
    })
    observer.observe(targetNode, { attributes: true })

    const newHeight = usePageFull.getHeight()
    usePageFull.setHeight(newHeight)
})

useHead({
    title: data?.value?.title
        ? data.value.title
        : 'Editora Sabiá'
})
</script>

<template>
    <main class="w-full h-screen">
        <paginate-content
            v-if="data"
            id="pagination-el"
            :reader-blocked="readerSettings.blocked.value === true ? true : null"
            :book-title="data.navigation.title"
            :reader-settings="JSON.stringify(settings)"
            :book-content="JSON.stringify(content)"
            :root-class="slugify(data.navigation.title).toLocaleLowerCase()"
            :css-string="bookSettings?.default?.cssString ?? ''"
        >
            <div slot="header">
                <p class="text-white">{{ data.navigation.title }}</p>
            </div>

            <div slot="optionsBottom">
                <div class="my-3 border-b border-gray-100"></div>
                <a href="https://sabia.pub" target="_blank" title="Sobre a Editora"
                    class="w-full block text-black text-center text-xs py-2 px-3 hover:bg-gray-100 rounded">
                    <img src="https://sabia.pub/images/logo.svg" style="height: 48px; margin: 0 auto; display: block;">
                </a>
            </div>

            <div slot="content" class="contentSlot" :class="classList">
                <ContentRenderer :key="path" :value="data" />
            </div>
        </paginate-content>
    </main>
</template>
