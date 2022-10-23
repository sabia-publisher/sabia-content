<script setup>
import readerSettings from '../../composables/readerSettings'

const show = ref(false)

const props = defineProps({
    src: String,
    srcDark: String,
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
                :class="`${ props.srcDark ? 'd-light' : ''} ${props.imageClass}`"
                @click.prevent="openImage()"
            >
            <img :src="props.srcDark"
                :style="imageStyle"
                class="mx-auto cursor-pointer"
                :class="`${ props.src ? 'd-dark' : ''} ${props.imageClass}`"
                @click.prevent="openImage()"
            >

            <figcaption>
                {{ props.subtitle }}
            </figcaption>

            <ImageComponent
                v-if="show"
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
