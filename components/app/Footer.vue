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
  <footer class="app-footer overflow-hidden">
    <div class="px-4 py-8 lg:px-40 justify-between">
      <div class="flex flex-wrap sm:justify-between w-full font-medium">
        <div class="w-1/2 flex flex-wrap">
          <!-- LOGO -->
          <c-animated-element :fromY="50" :toY="0" class="w-1/2">
            <nuxt-link
              to="/"
              class="cursor-pointer pointer-events-auto block mb-10 sm:mb-0"
            >
              <a-logo
                class="logo w-[20vw] sm:w-[14.52vw] object-contain fill-white"
              />
            </nuxt-link>
          </c-animated-element>
          <!-- END :: LOGO -->

          <!-- NAV -->
          <c-animated-element :fromY="50" :toY="0" :delay="0.2" class="w-1/2">
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
        </div>

        <div class="w-1/2 flex flex-wrap">
          <!-- SOCIALS -->
          <c-animated-element :fromY="50" :toY="0" :delay="0.3" class="w-1/2">
            <div class="w-1/2">
              <div class="flex flex-wrap">
                <div
                  v-for="(item, index) in appData?.data?.socials"
                  :key="index"
                  class="w-1/2 flex mb-4 last:mb-0"
                >
                  <a :href="item.item.url" class="text-14 lg:text-base">
                    <img
                      :src="item.icon.url"
                      :alt="item.item.text || 'PopArt'"
                    />
                  </a>
                </div>
              </div>
            </div>
          </c-animated-element>
          <!-- END :: SOCIALS -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app-footer {
}
</style>
