import { useWindowSize, watchDebounced } from '@vueuse/core'
const { height: windowHeight } = useWindowSize()

const state = reactive({
    height: 100
})

const height = computed(() => (state.height * 0.92) + 'px')
function setHeight(height) {
    state.height = height
}

function getHeight() {
    const webComponent = document?.querySelector('paginate-content')
    if (!webComponent) return

    const element = webComponent.shadowRoot.querySelector('#engine')

    if (element && element.offsetHeight) {
        return element.offsetHeight

    } else {
        return state.height
    }
}

watchDebounced(
    windowHeight,
    () => {
        setHeight(getHeight())
    },
    { debounce: 200, maxWait: 500 },
)

export default {
    height,
    setHeight,
    getHeight
}
