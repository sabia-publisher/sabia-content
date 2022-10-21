<script setup>
import SchemeFull from './Schemes/SchemeFull.vue'

import readerSettings from '../../composables/readerSettings'
import usePageFull from '../../composables/usePageFull'

const show = ref(false)

const props = defineProps({
    title: String,
    src: String,
    subtitle: {
        type: String,
        default: 'Scenario 1. How might we design politics of nature in which design is a conscious implementer of technological innovation by mediating complex processes for reduced consumption and end of predatory extraction?'
    }
})

function openImage() {
    readerSettings.setBlocked(true)
    show.value = true
}
</script>

<template>
    <PageFull class="flex flex-col">
        <figure class="flex flex-col" :style="`height: ${usePageFull.height.value}`">
            <div class="flex-1 flex">
                <img :src="props.src"
                    class="mx-auto cursor-pointer"
                    :style="`max-height: calc(${usePageFull.height.value} - 6em);`"
                    @click.prevent="openImage()"
                >
            </div>
            <figcaption class="grow-0">
                {{ props.subtitle }}
            </figcaption>

            <SchemeFull v-if="show" v-bind="props" :show="show" @close-image="show = false" />
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
