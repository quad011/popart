<script setup>
import { PrismicLink } from "#components";

const appStore = useAppStore();
const { appData, fontsLoaded, isMenuOpen } = storeToRefs(appStore);

const scrollingStore = useScrollingStore();
const { navigationVisible, scrollingStarted } = storeToRefs(scrollingStore);

const { linkResolver } = useLinkResolver();

onMounted(() => {});
</script>

<template>
  <div class="fixed w-full left-0 top-0 z-50">
    <header
      :class="{
        'backdrop-blur-sm': scrollingStarted,
      }"
      class="app-header px-4 lg:px-20 py-4 lg:py-4 fixed top-0 left-0 w-full z-[100] pointer-events-none"
    >
      <c-animated-element
        :fromY="-50"
        :toY="0"
        class="flex items-start justify-between"
      >
        <!-- LOGO -->
        <nuxt-link to="/" class="cursor-pointer pointer-events-auto">
          <a-logo
            class="logo w-[30vw] sm:w-[18vw] lg:w-[11.3vw] object-contain fill-white"
          />
        </nuxt-link>
        <!-- END :: LOGO -->

        <div class="flex items-center">
          <div class="hidden md:flex pointer-events-auto font-medium">
            <PrismicLink
              v-for="item in appData?.data?.main_navigation"
              :key="item.key"
              :to="linkResolver(item.link)"
              class="mr-3 last:mr-0 text-14 lg:text-base pr-3 last:pr-0 border-r-[2px] border-white/50 last:border-r-0"
            >
              <span v-html="item.link.text" class="link tracking-tighter" />
            </PrismicLink>
          </div>

          <div class="flex justify-end md:hidden">
            <app-hamburger
              class="flex justify-end pointer-events-auto"
              :isMenuOpen="isMenuOpen"
              @click="isMenuOpen = !isMenuOpen"
              @keydown.esc="isMenuOpen = false"
            />
          </div>
        </div>
      </c-animated-element>
    </header>
  </div>
</template>
