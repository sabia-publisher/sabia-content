<script setup>
import readerSettings from '../../composables/readerSettings'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const emit = defineEmits(['closeImage'])

const image = ref(null)

const props = defineProps({
    src: String,
    imageClass: String,
    imageStyle: String,
    imageHeight: String,
    subtitle: String,
    show: Boolean
})

function closeImage() {
    readerSettings.setBlocked(false)
    emit('closeImage')
}

onClickOutside(image, () => closeImage())
onKeyStroke('Escape', () => closeImage())

</script>

<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 w-screen h-screen flex p-4 justify-center items-center bg-black/50">
        <div ref="image" class="bg-white p-10 rounded-lg w-full max-w-[88vw] h-[94vh]">
            <figure class="flex h-full max-h-[calc(94vh-5rem)]">
                <div class="flex-1 h-full flex justify-center items-center">
                    <slot>
                        <img :src="props.src" class="object-contain h-full w-full">
                    </slot>
                </div>
                <figcaption class="grow-0 w-72 text-sm leading-normal ml-10 pt-6">
                    {{ props.subtitle }}
                </figcaption>
            </figure>
        </div>
    </div>
</template>
