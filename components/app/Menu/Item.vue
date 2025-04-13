<script setup>
import { PrismicLink } from "#components";

const appStore = useAppStore();
const { isMenuOpen } = storeToRefs(appStore);

const props = defineProps({
  item: Object,
  index: {
    type: [Number, String],
  },
});

const scrollToSection = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    const offset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    history.pushState(null, null, hash);
    isMenuOpen.value = false;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const { linkResolver } = useLinkResolver();
</script>

<template>
  <div class="app-menu-item">
    <!-- @click.prevent="scrollToSection(item.link.url)" -->
    <PrismicLink
      @click.prevent="closeMenu"
      :to="linkResolver(item.link)"
      class="text-base"
    >
      <span v-html="item.link.text" class="link" />
    </PrismicLink>
  </div>
</template>

<style lang="scss" scoped>
.app-menu-item {
  .item {
    @apply transition-all duration-500;
    &:hover {
      letter-spacing: 0.1em;
    }
  }
}
</style>
