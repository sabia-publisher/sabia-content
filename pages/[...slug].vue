<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const route = useRoute()
const contentHead = useContentHead()

const isbn = route.params.slug[1]
const books = navigation.value.find(item => item._path === '/books')

const book = books.children.find(item => item.title === isbn)
const chapters = book.children

// const references = await import(`../content/books/${isbn}/.references.js`)
// const { default: footnotes } = await import(`../content/books/${isbn}/.footnotes.json`)

const content = reactive({
    summary: chapters.map(item => ({ title: item.title, link: item._path })),
    // ...(references?.default?.references && { references: references.default.references }),
    // footnotes
})

const { data } = await useAsyncData(`content-${route.path}`, () => {
    return queryContent()
        .where({ _path: route.path })
        .findOne()
})

const bookSettings = await import(`../content/books/${isbn}/.settings/index.js`)
// data.value.body = useReferences(data.value.body, references)

const settings = reactive(bookSettings.default)

watch(() => route.params.slug, async () => {
    const { path } = useRoute()
    const newContent = await queryContent()
        .where({ _path: path })
        .findOne()

    data.value = newContent
})
</script>

<template>
    <main class="w-full h-screen">
        <paginate-content
            v-if="data"
            id="pagination-el"
            book-title="A Tale of Two Cities"
            :reader-settings="JSON.stringify(settings)"
            :book-content="JSON.stringify(content)"
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

            <div slot="content" class="contentSlot">
                <ContentRenderer :key="path" :value="data" />
            </div>
        </paginate-content>
    </main>
</template>
