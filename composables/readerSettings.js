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
