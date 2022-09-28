<script setup>
</script>

<template>
    <div class="flex flex-col min-h-screen justify-between">
        <section class="relative h-full flex-grow flex">
            <NuxtPage />
        </section>
    </div>
</template>

<style lang="postcss">
.slideup-leave-active {
    transition: transform 0.5s ease;
}

.slideup-leave-active {
    transform: translateY(-200px);
}
</style>
