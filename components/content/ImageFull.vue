<script setup>
import readerSettings from '../../composables/readerSettings'
import usePageFull from '../../composables/usePageFull'

const show = ref(false)

const props = defineProps({
    title: String,
    src: String,
    srcDark: String,
    subtitle: String
})

function openImage() {
    readerSettings.setBlocked(true)
    show.value = true
}
</script>

<template>
    <PageFull class="flex flex-col" v-slot="slotProps">
        <figure class="flex flex-col" :style="`height: ${usePageFull.height.value}`">
            <p v-if="props.title" class="h3 grow-0">
                {{ props.title }}
            </p>
            <div class="flex-1 flex">
                <img :src="props.src"
                    class="mx-auto cursor-pointer"
                    :class="props.srcDark ? 'd-light' : ''"
                    :style="`max-height: calc(${usePageFull.height.value} - 6em);`"
                    @click.prevent="openImage()"
                >
                <img :src="props.srcDark"
                    class="mx-auto cursor-pointer"
                    :class="props.src ? 'd-dark' : ''"
                    :style="`max-height: calc(${usePageFull.height.value} - 6em);`"
                    @click.prevent="openImage()"
                >
            </div>
            <figcaption class="grow-0">
                {{ props.subtitle }}
            </figcaption>

            <ImageComponent v-if="show" v-bind="props" :show="show" @close-image="show = false" />
        </figure>
    </PageFull>
</template>

<style scoped lang="postcss">
figcaption {
    color: var(--theme-primary, #333333);
    border-top: 0.25em solid var(--theme-primary, #333333);
    font-size: 0.8em;

    @apply py-4 mt-4 leading-tight
}

.prevent-break {
    break-before: column;
    break-after: column;
    break-inside: avoid-column;
}
</style>
