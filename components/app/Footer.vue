<script setup>
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { appData } = storeToRefs(appStore);

const { linkResolver } = useLinkResolver();

onMounted(() => {
  console.log("appStoreeeeee", appData);
});
</script>

<template>
  <footer class="app-footer overflow-hidden text-white">
    <div class="px-4 py-8 lg:p-16 justify-between">
      <div class="flex flex-wrap sm:justify-between w-full font-medium">
        <!-- LOGO -->
        <c-animated-element
          :fromY="50"
          :toY="0"
          class="order-first w-1/2 sm:w-auto"
        >
          <nuxt-link
            to="/"
            class="cursor-pointer pointer-events-auto block mb-10 sm:mb-0"
          >
            <a-logo
              class="logo w-[20vw] sm:w-[12.33vw] object-contain transition-all duration-500 fill-white"
            />
          </nuxt-link>
        </c-animated-element>
        <!-- END :: LOGO -->

        <!-- NAV -->
        <c-animated-element
          :fromY="50"
          :toY="0"
          :delay="0.2"
          class="order-2 sm:order-3"
        >
          <div class="flex flex-col mb-10 sm:mb-0">
            <PrismicLink
              v-for="item in appData?.data?.main_navigation"
              :key="item.key"
              :to="linkResolver(item.link)"
              class="mb-1 last:mb-0 text-14 lg:text-base"
            >
              <span v-html="item.link.text" class="link" />
            </PrismicLink>
          </div>
        </c-animated-element>
        <!-- NED :: NAV -->

        <!-- SOCIALS -->
        <c-animated-element
          :fromY="50"
          :toY="0"
          :delay="0.3"
          class="order-last"
        >
          <div class="flex flex-col sm:items-end">
            <a
              v-for="(item, index) in appData?.data?.socials"
              :key="index"
              :href="item.item.url"
              class="text-14 lg:text-base link reversed mb-1 last:mb-0"
            >
              <img :src="item.icon.url" :alt="item.item.text || 'PopArt'" />
            </a>
          </div>
        </c-animated-element>
        <!-- END :: SOCIALS -->
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app-footer {
}
</style>
