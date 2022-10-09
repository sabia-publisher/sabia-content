<script setup>
import usePageFull from '../../composables/usePageFull'
</script>

<template>
    <div class="prevent-break fullPageHeight">
        <slot></slot>
    </div>
</template>

<style scoped>
.prevent-break {
    break-before: column;
    break-inside: avoid-column;
}

.fullPageHeight {
    height: v-bind('usePageFull.height.value')
}
</style>
