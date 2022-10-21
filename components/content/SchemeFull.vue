<script setup>
import readerSettings from '../../composables/readerSettings'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const emit = defineEmits(['closeImage'])

const image = ref(null)
const degrees = ref(0)
const rotate = computed(() => degrees.value + 'deg')

const props = defineProps({
    imageClass: String,
    imageStyle: String,
    imageHeight: String,
    src: String,
    subtitle: String,
    show: Boolean
})

function closeImage() {
    readerSettings.setBlocked(false)
    window.removeEventListener("wheel", scrollHorizontal)
    emit('closeImage')
}

onClickOutside(image, () => closeImage())
onKeyStroke('Escape', () => closeImage())

onMounted(() => {
    readerSettings.setBlocked(true)
    window.addEventListener("wheel", scrollHorizontal)
})

function scrollHorizontal(e) {
    if (e.deltaY > 0)
        if (degrees.value + 10 > 360)
            degrees.value = 360
        else
            degrees.value += 10
    else
        if (degrees.value - 10 < 0)
            degrees.value = 0
        else
            degrees.value -= 10
}

</script>

<template>
    <div v-if="show" class="fixed top-0 left-0 z-20 w-screen h-screen flex p-4 justify-center items-center bg-black/50">
        <div ref="image" class="bg-white p-10 rounded-lg w-full max-w-[88vw] h-[94vh]">
            <figure class="flex h-full max-h-[calc(94vh-5rem)]">
                <div class="flex-1 h-full flex flex-col justify-center items-center">
                    <img :src="props.src" class="[ diagram ] object-contain h-full w-full">

                    <input type="range" class="mt-10 relative z-10"
                        v-model="degrees"
                        min="0" max="360" step="0.01"
                    >
                </div>
                <figcaption class="grow-0 w-72 text-sm leading-normal ml-10 pt-6">
                    {{ props.subtitle }}
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<style>
.diagram {
    transform: rotate(v-bind(rotate));
}

[type=range] {
    -webkit-appearance: none;
    background: transparent;
    margin: 12px 0;
    width: 100%;
}

[type=range]::-moz-focus-outer {
    border: 0;
}

[type=range]:focus {
    outline: 0;
}

[type=range]:focus::-webkit-slider-runnable-track {
    background: #fbfbfc;
}

[type=range]:focus::-ms-fill-lower {
    background: #eceff1;
}

[type=range]:focus::-ms-fill-upper {
    background: #fbfbfc;
}

[type=range]::-webkit-slider-runnable-track {
    cursor: default;
    height: 8px;
    transition: all 0.2s ease;
    width: 100%;
    background: #eceff1;
    border: 2px solid #cfd8dc;
    border-radius: 5px;
}

[type=range]::-webkit-slider-thumb {
    background: #607d8b;
    border: 2px solid #eceff1;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: default;
    height: 24px;
    width: 24px;
    -webkit-appearance: none;
    margin-top: -10px;
}

[type=range]::-moz-range-track {
    cursor: default;
    height: 8px;
    transition: all 0.2s ease;
    width: 100%;
    background: #eceff1;
    border: 2px solid #cfd8dc;
    border-radius: 5px;
    height: 4px;
}

[type=range]::-moz-range-thumb {
    background: #607d8b;
    border: 2px solid #eceff1;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: default;
    height: 24px;
    width: 24px;
}

[type=range]::-ms-track {
    cursor: default;
    height: 8px;
    transition: all 0.2s ease;
    width: 100%;
    background: transparent;
    border-color: transparent;
    border-width: 12px 0;
    color: transparent;
}

[type=range]::-ms-fill-lower {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);
    background: #dde3e6;
    border: 2px solid #cfd8dc;
    border-radius: 10px;
}

[type=range]::-ms-fill-upper {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);
    background: #eceff1;
    border: 2px solid #cfd8dc;
    border-radius: 10px;
}

[type=range]::-ms-thumb {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);
    background: #607d8b;
    border: 2px solid #eceff1;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: default;
    height: 24px;
    width: 24px;
    margin-top: 2px;
}

[type=range]:disabled::-webkit-slider-thumb,
[type=range]:disabled::-moz-range-thumb,
[type=range]:disabled::-ms-thumb,
[type=range]:disabled::-webkit-slider-runnable-track,
[type=range]:disabled::-ms-fill-lower,
[type=range]:disabled::-ms-fill-upper {
    cursor: not-allowed;
}
</style>
