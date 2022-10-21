<script setup>
const props = defineProps({
    text: String,
    src: String
})
</script>

<template>
    <section class="prevent-break">
        <figure class="flex items-end">
            <img :src="props.src"
                class="mx-auto cursor-pointer w-64"
            >
            <figcaption class="grow-0">
                <slot></slot>
            </figcaption>
        </figure>
    </section>
</template>

<style scoped lang="postcss">
figcaption {
    border-top: none !important;
    border-left: 0.25em solid var(--theme-primary, #333333);
    color: var(--theme-primary, #333333);
    font-size: 0.8em;

    @apply w-full py-4 pl-4 leading-tight;

    & :deep(p) {
        @apply m-0 p-0;
    }
}

.prevent-break {
    break-after: column;
    break-inside: avoid-column;
}
</style>
