<script setup>
const localePath = useLocalePath()
const route = useRoute()
const showMenu = ref(false)

watch(route.path, () => (showMenu.value = false))
</script>

<template>
    <div class="z-10">
        <AccessibilityMenu />

        <header class="bg-areia dark:bg-gray-coat
    			w-full px-5 md:px-10 py-1 flex justify-between items-center shadow-md relative">

            <Logo class="h-16 my-2 transition-all duration-100" />

            <nav class="hidden md:flex justify-between">
                <nuxt-link to="/catalog/books">{{ $t('menu.catalog') }}</nuxt-link>
                <nuxt-link to="/publish">{{ $t('menu.publish') }}</nuxt-link>
                <nuxt-link to="/about-us">{{ $t('menu.about') }}</nuxt-link>
                <nuxt-link to="/contact">{{ $t('menu.contact') }}</nuxt-link>
            </nav>

            <div class="lg:hidden">
                <div class="relative z-10">
                    <button @click.prevent="showMenu = !showMenu" type="button)" class="relative w-8 h-8">
                        <div class="menu" :class="showMenu ? 'menu-open' : ''"></div>
                        <div class="menu" :class="showMenu ? 'menu-open' : ''"></div>
                    </button>
                </div>

                <transition enter-active-class="transition ease-out duration-200" enter-class="opacity-0 -translate-y-1"
                    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                    leave-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">

                    <div v-if="showMenu" class="[ mobile-menu ] absolute z-10 right-0 transform shadow-lg w-screen">
                        <div class="relative">

                            <nav class="p-4 pb-4 bg-areia dark:bg-gray-coat" aria-labelledby="Menu">
                                <div class="md:hidden space-y-2">
                                    <nuxt-link :to="localePath('/catalog/books')" class="submenu-item">
                                        {{ $t('menu.catalog')}}
                                    </nuxt-link>
                                    <nuxt-link :to="localePath('publish')" class="submenu-item">
                                        {{ $t('menu.publish') }}
                                    </nuxt-link>
                                    <nuxt-link :to="localePath('about-us')" class="submenu-item">
                                        {{ $t('menu.about') }}
                                    </nuxt-link>
                                    <nuxt-link :to="localePath('contact')" class="submenu-item">
                                        {{ $t('menu.contact') }}
                                    </nuxt-link>
                                </div>
                            </nav>

                        </div>
                    </div>
                </transition>

            </div>
        </header>
    </div>
</template>



<style scoped lang="postcss">
nav a,
a.nav {
    @apply font-body text-terra dark: text-areia py-2;
}

nav a:hover,
a.nav:hover {
    @apply text-urucum dark: text-canarinho underline;
}

nav a.button:hover {
    @apply text-white no-underline;
}

@screen md {

    nav a,
    a.nav {
        @apply mx-1 px-2;
    }
}

@screen lg {

    nav a,
    a.nav {
        @apply mx-1 px-4;
    }
}

@screen xl {

    nav a,
    a.nav {
        @apply mx-2 px-5;
    }
}

.mobile-menu {
    top: 100%;
    @apply inset-x-0;
}

.submenu-item {
    @apply block m-0 px-16 py-2 text-base font-medium text-gray-900 transition ease-in-out duration-150;
}

.menu {
    width: 30px;
    height: 2px;
    margin: 5px 0;

    @apply bg-terra dark: bg-white transition-all duration-200;
}

.menu.menu-open:nth-child(1) {
    margin: 0;
    @apply transform rotate-45;
}

.menu.menu-open:nth-child(2) {
    margin: 0;
    @apply transform -rotate-45;
}
</style>
