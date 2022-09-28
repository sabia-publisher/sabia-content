<script setup>
const { locale } = useI18n()

const colorMode = useColorMode()
const darkmode = computed(() => colorMode.value === 'dark')

const fontSize = ref(16)

function changeMode() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

function changeFontSize(size) {
    fontSize.value = size

    const root = document.querySelector(":root")
    if (root) {
        root.style.fontSize = `${size}px`;
        localStorage.setItem('sabia-root-font-size', size)
    }
}

onBeforeMount(() => {
    if (process.client) {
        const local = localStorage.getItem('sabia-root-font-size')
        if (local)
            changeFontSize(Number(local))
        else
            fontSize.value = 16
    }
})

</script>

<template>
  	<section class="[ accessibility-menu ]
	  bg-terra dark:bg-gray-dark high:bg-black
	  text-areia px-2 py-1 overflow-auto flex justify-center md:block"
	>
		<div class="md:float-right flex items-center">
			<button @click.prevent="changeFontSize(fontSize + 1)" class="font-bold text-xs">
				+ A
			</button>

			<button @click.prevent="changeFontSize(fontSize - 1)" class="font-bold text-xs">
				- A
			</button>

			<button @click.prevent="changeMode('light')" v-if="darkmode" :title="$t('fromDarkmode')" :aria-label="$t('fromDarkmode')">
				<Icon name="Sun" class="w-5 h-5" />
			</button>

			<button @click.prevent="changeMode('dark')" v-if="!darkmode" :title="$t('toDarkmode')" :aria-label="$t('toDarkmode')">
				<Icon name="Moon" class="w-5 h-5" />
			</button>

			<div class="[ langmenu ] mt-0 ml-6 md:mr-8 border border-areia rounded-sm flex">
				<label class="px-2 py-2 text-xs font-bold block">
					EN
                    <input type="radio" v-model="locale" value="en" class="hidden">
                </label>

				<label class="border-l border-areia px-2 py-2 text-xs font-bold block">
					PT
                    <input type="radio" v-model="locale" value="pt" class="hidden">
                </label>
			</div>
		</div>

	</section>
</template>

<style lang="postcss" scoped>
	.accessibility-menu button {
		font-size: 16px;
		@apply mx-1 w-10 h-10 flex items-center justify-center;
	}

	.accessibility-menu button:hover {
		@apply bg-urucum dark:bg-gray-coat rounded;
	}

	.langmenu label {
		@apply text-areia;
	}

	.langmenu label:has(input:checked) {
		@apply bg-areia text-terra dark:text-gray-coat;
	}
</style>
