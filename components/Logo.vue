<script setup>
const colorMode = useColorMode()
const darkmode = computed(() => colorMode.value === 'dark')
</script>

<template>
	<nuxt-link to="/" class="flex items-center" aria-label="Editora Sabiá" title="Editora Sabiá">
  		<img v-if="!darkmode" src="/images/logo.svg" alt="" class="h-full hidden sm:block">
		<img v-else src="/images/logo-dark.svg" alt="" class="h-full hidden sm:block">

		<img v-if="!darkmode" src="/images/logo-mobile.svg" alt="" class="transition-all duration-75 sm:hidden h-12">
		<img v-else src="/images/logo-mobile-dark.svg" alt="" class="transition-all duration-75 sm:hidden h-12">
	</nuxt-link>
</template>
