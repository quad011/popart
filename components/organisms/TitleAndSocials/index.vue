<script setup>
import socials from "./socialsConfig";
const props = defineProps({
  title: {
    type: Array,
  },
  image: {
    type: Object,
  },
});

onMounted(() => {});
</script>

<template>
  <div class="o-title-and-socials my-10 sm:my-20 relative">
    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0" class="px-4 sm:px-16 lg:px-40">
      <m-title
        :title="title"
        innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- SOCIALS -->
    <div class="flex items-center justify-center mt-16 sm:mt-32 lg:mb-20">
      <c-animated-element
        v-for="(decor, index) in socials"
        :key="index"
        :fromScale="0"
        :toScale="1"
        :rotate="decor.rotate"
        :delay="index * 0.1"
        :class="`relative ${decor.class}`"
      >
        <img :src="decor.img" class="w-screen h-full" alt="popart" />
      </c-animated-element>
      <!-- END :: DECORATIONS -->
    </div>
  </div>
</template>
