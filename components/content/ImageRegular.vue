<script setup>
import { string } from 'postcss-selector-parser';

const props = defineProps({
    src: String,
    imageClass: string,
    imageStyle: string,
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
