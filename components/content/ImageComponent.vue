<script setup>
import Panzoom from '@panzoom/panzoom'

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

onKeyStroke('Escape', () => closeImage())

onMounted(() => {
    const elem = document.getElementById('panzoom-element')
    console.log(elem)
    if (elem) {
        const panzoom = Panzoom(elem, {
            initialZoom: 1
        })
        elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    }

    onBeforeMount(() => {
        if (elem) {
            elem.parentElement.removeEventListener('wheel', panzoom.zoomWithWheel)
        }
    })
})

</script>

<template>
    <div class="fixed top-0 left-0 z-1000 w-screen h-screen flex flex-col md:flex-col-reverse p-4 justify-center items-center bg-black/50">
        <div ref="image" class="relative bg-white p-0 md:p-10 rounded-lg w-full max-w-[98vw] md:max-w-[92vw] h-[85vh] md:h-[92vh]">

            <figure class="flex flex-col md:flex-row h-full max-h-full md:max-h-[calc(94vh-5rem)]">
                <div class="flex-1 h-full flex justify-center items-center">
                    <img id="panzoom-element" :src="props.src" class="object-contain h-full w-full">
                </div>
                <figcaption class="px-4 pb-4 grow-0 md:w-72 text-sm leading-normal md:ml-10 md:mr-0 pt-6">
                    {{ props.subtitle }}
                </figcaption>
            </figure>
        </div>

        <button @click.prevent="closeImage()"
            class="z-10 p-2 px-4 rounded bg-primary text-white font-body text-base mt-4 md:mt-0 md:mb-4 mr-0 md:mr-10 self-end">
            Fechar
        </button>
    </div>
</template>

<style scoped>
.z-1000 {
    z-index: 1000;
}
</style>
