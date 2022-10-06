<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const route = useRoute()

const isbn = route.params.slug[1]
const books = navigation.value.find(item => item._path === '/books')

const book = books.children.find(item => item.title === isbn)
const chapters = book.children

const references = await import(`../content/books/${isbn}/.references.js`)
// const { default: footnotes } = await import(`../content/books/${isbn}/.footnotes.json`)

const content = reactive({
    summary: chapters.map(item => ({ title: item.title, link: item._path })),
    ...(references?.default?.references && { references: references.default.references }),
    // footnotes
})

const { data } = await useAsyncData(`content-${route.path}`, () => {
    return queryContent()
        .where({ _path: route.path })
        .findOne()
})

// data.value.body = useReferences(data.value.body, references)

const settings = reactive({
    fontSize: 19, // number
    fontsOptions: [
        {
            label: 'Times New Roman',
            name: 'TimesNewRoman, Times New Roman, Times, Baskerville, Georgia,serif',
            defaultTextFont: true
        },
        {
            label: 'Inter',
            name: '"Inter", sans-serif',
            link: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
            defaultBaseFont: true
        },
        {
            label: 'Open Dyslexic',
            name: '"Open-Dyslexic", sans-serif',
            link: 'https://fonts.cdnfonts.com/css/open-dyslexic'
        },
        {
            label: 'Atkinson Hyperlegible',
            name: 'Atkinson Hyperlegible',
            link: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        }
    ]
})

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
                <img src="https://sabia.pub/images/logo-mobile-dark.svg" style="height: 40px">
            </div>

            <div slot="optionsBottom">
                <div class="my-3 border-b border-gray-100"></div>
                <a href="https://sabia.pub" target="_blank" title="Sobre a Editora"
                    class="w-full block text-black text-center text-xs py-2 px-3 hover:bg-gray-100 rounded">
                    <img src="https://sabia.pub/images/logo.svg" style="height: 48px; margin: 0 auto; display: block;">
                </a>
            </div>

            <div slot="content">
                <ContentRenderer :key="path" :value="data" />
            </div>
        </paginate-content>
    </main>
</template>
