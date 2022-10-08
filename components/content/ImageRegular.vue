<script setup>
const props = defineProps({
    src: String,
    imageClass: String,
    imageStyle: String,
    imageHeight: String,
    subtitle: String
})
</script>

<template>
    <div class="prevent-inside">
        <figure>
            <img :src="props.src"
                :style="imageStyle"
                class="mx-auto"
                :class="props.imageClass"
            >
            <figcaption>
                {{ props.subtitle }}
            </figcaption>
        </figure>
    </div>
</template>

<style scoped lang="postcss">
.prevent-inside {
    break-inside: avoid-column;
}

figcaption {
    @apply py-4 my-4 leading-tight
}
</style>
