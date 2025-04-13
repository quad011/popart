<script setup>
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { appData } = storeToRefs(appStore);

const { linkResolver } = useLinkResolver();

onMounted(() => {});
</script>

<template>
  <footer class="app-footer">
    <div
      class="px-4 py-3 px-4 sm:px-16 lg:px-40 justify-between overflow-hidden"
    >
      <div
        class="flex flex-wrap sm:justify-between w-full font-medium mb-10 lg:mb-16"
      >
        <div class="w-full md:w-1/2 flex flex-wrap">
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
          <c-animated-element
            :fromY="50"
            :toY="0"
            :delay="0.2"
            class="w-1/2 md:w-1/3"
          >
            <div class="flex flex-col mb-10 sm:mb-0 lg:pl-10">
              <div
                class="block"
                v-for="item in appData?.data?.main_navigation"
                :key="item.key"
              >
                <PrismicLink
                  :to="linkResolver(item.link)"
                  class="mb-1 last:mb-0 text-small md:text-base"
                >
                  <span v-html="item.link.text" class="link" />
                </PrismicLink>
              </div>
            </div>
          </c-animated-element>
          <!-- NED :: NAV -->
        </div>

        <div class="w-full md:w-1/2 flex flex-wrap relative">
          <!-- SOCIALS -->
          <c-animated-element
            :fromY="50"
            :toY="0"
            :delay="0.3"
            class="w-full md:w-1/2"
          >
            <div class="w-full md:w-1/2">
              <div class="flex flex-wrap">
                <div
                  v-for="(item, index) in appData?.data?.socials"
                  :key="index"
                  class="w-1/6 md:w-1/2 flex md:mb-4 last:mb-0"
                >
                  <a
                    :href="item.item.url"
                    class="text-14 lg:text-base lg:hover:scale-[1.5] duration-500 transition-transform mx-auto"
                  >
                    <img
                      :src="item.icon.url"
                      class="md:w-[18px] h-auto"
                      :alt="item.item.text || 'PopArt'"
                    />
                  </a>
                </div>
              </div>
            </div>
          </c-animated-element>
          <!-- END :: SOCIALS -->

          <div class="w-1/2 hidden md:block">
            <!-- OCTAGON DECORATION -->
            <div
              class="absolute right-0 top-0 hidden sm:flex flex-wrap w-[8rem] lg:w-[11rem]"
            >
              <div
                v-for="i in 25"
                class="w-1/5 flex items-center justify-center"
              >
                <c-animated-element
                  :fromScale="0"
                  :toScale="1"
                  :delay="i * 0.1"
                  class="w-[1.43rem] h-[1.43rem] m-1 lg:m-2"
                >
                  <a-octagon class="stroke-black" />
                </c-animated-element>
              </div>
            </div>
            <!-- END :: OCTAGON DECORATION -->
          </div>
        </div>
      </div>
      <!-- COPYRIGHT -->
      <p class="text-18 lg:text-small text-center">
        Design and development by PopArt Studio {{ new Date().getFullYear() }}.
      </p>
      <!-- END :: COPYRIGHT -->
    </div>
  </footer>
</template>
