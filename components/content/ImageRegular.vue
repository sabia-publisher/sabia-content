<script setup>
import readerSettings from '../../composables/readerSettings'

const show = ref(false)

const props = defineProps({
    src: String,
    imageClass: String,
    imageStyle: String,
    imageHeight: String,
    subtitle: String
})

function openImage() {
    readerSettings.setBlocked(true)
    show.value = true
}
</script>

<template>
    <div class="prevent-inside">
        <figure>
            <img :src="props.src"
                :style="imageStyle"
                class="mx-auto cursor-pointer"
                :class="props.imageClass"
                @click.prevent="openImage()"
            >
            <figcaption>
                {{ props.subtitle }}
            </figcaption>

            <ImageComponent
                v-bind="props"
                :show="show"
                @close-image="show = false"
            />
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
