<script setup>
const appStore = useAppStore();
const { isMenuOpen, appData } = storeToRefs(appStore);

onMounted(() => {});
</script>

<template>
  <div class="layout base">
    <!-- APP HEADER -->
    <app-header />
    <!-- END :: APP HEADER -->

    <!-- PAGE CONTENT -->
    <t-fade :delay="0.15" :duration="3">
      <slot />
    </t-fade>
    <!-- END :: PAGE CONTENT -->

    <t-gsap
      :notAbsolute="true"
      :leave_to="{ scale: 0.9, opacity: 0, duration: 0.4 }"
      :from="{ opacity: 0 }"
      :to="{
        opacity: 1,
        duration: 0.4,
        ease: 'Power1.easeOut',
      }"
    >
      <app-menu
        class="overflow-auto w-screen h-screen z-40 fixed top-0 left-0"
        :key="isMenuOpen"
        v-if="isMenuOpen"
        :menuOpen="isMenuOpen"
      />
    </t-gsap>

    <!-- SOCIALS -->
    <div class="fixed right-0 top-[12vw] z-50 hidden flex-col mr-5 lg:flex">
      <c-animated-element
        v-for="(item, index) in appData?.data?.socials"
        :key="index"
        :fromX="50"
        :toX="0"
        :delay="index * 0.1"
        class="mb-4 last:mb-0"
      >
        <a :href="item.item.url">
          <img
            :src="item.icon.url"
            :alt="item.item.text || 'PopArt'"
            class="hover:scale-[1.5] transition-transform duration-300"
          />
        </a>
      </c-animated-element>
    </div>
    <!-- END :: SOCIALS -->
  </div>
</template>
