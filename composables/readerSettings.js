import { useWindowSize, watchDebounced } from '@vueuse/core'
const { height: windowHeight } = useWindowSize()

const state = reactive({
    blocked: false
})

const blocked = computed(() => state.blocked)
function setBlocked(value) {
    state.blocked = value
}

export default {
    blocked,
    setBlocked
}
