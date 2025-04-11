<script setup>
const appStore = useAppStore();
const { isMenuOpen } = storeToRefs(appStore);
const introVisible = ref(true);

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
  </div>
</template>
