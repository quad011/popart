<script setup>
import { useScrollLock } from "@vueuse/core";

const appStore = useAppStore();
const { appData, isMenuOpen } = storeToRefs(appStore);

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  isMenuOpen.value = false;
}

const isLocked = useScrollLock(document.body);

onMounted(() => {
  isLocked.value = true;
});
</script>

<template>
  <div
    class="app-menu flex md:hidden flex-col items-center justify-center bg-purple"
  >
    <app-menu-item
      v-for="(item, index) in appData?.data?.main_navigation"
      :key="item.id"
      :item="item"
      :index="index"
      class="mb-8 last:mb-0 text-center"
    />
  </div>
</template>
<style scoped lang="scss">
.app-menu {
}
</style>
