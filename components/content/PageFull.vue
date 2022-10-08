<script setup>
import { useWindowSize, watchDebounced} from '@vueuse/core'

const boxHeight = ref(0)
const { height: windowHeight } = useWindowSize()

onMounted(() => {
    setHeight()
})

watchDebounced(
    windowHeight,
    () => { setHeight() },
    { debounce: 500, maxWait: 1000 },
)

function setHeight() {
    const webComponent = document
        .querySelector('paginate-content')
    if (!webComponent) return

    const element = webComponent.shadowRoot.querySelector('#engine')

    if (element && element.offsetHeight) {
        boxHeight.value = element.clientHeight * 0.9
    }
}

</script>

<template>
    <div class="rounded-lg prevent-break"
        :style="boxHeight > 0 ? `height: ${boxHeight}px` : `opacity: 0`"
    >
        <slot :boxHeight="boxHeight"></slot>
    </div>
</template>

<style scoped>
.prevent-break {
    break-before: column;
    break-inside: avoid-column;
}
</style>
