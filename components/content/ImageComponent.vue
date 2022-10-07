<script setup>
const props = defineProps({
    src: String,
    subtitle: String
})
</script>

<template>
    <div class="p-4 rounded-lg border border-green-500 my-4">
        <p>{{ props.src }}</p>
        <p>{{ props.subtitle }}</p>
    </div>
</template>
