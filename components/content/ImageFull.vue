<script setup>
import usePageFull from '../../composables/usePageFull'

const props = defineProps({
    title: String,
    src: String,
    subtitle: String
})
</script>

<template>
    <PageFull class="flex flex-col" v-slot="slotProps">
        <figure class="flex flex-col" :style="`height: ${usePageFull.height.value}`">
            <p v-if="props.title" class="h3 grow-0">
                {{ props.title }}
            </p>
            <div class="flex-1">
                <img :src="props.src" class="mx-auto" :style="`max-height: calc(${usePageFull.height.value} - 6em);`">
            </div>
            <figcaption class="grow-0">
                {{ props.subtitle }}
            </figcaption>
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
