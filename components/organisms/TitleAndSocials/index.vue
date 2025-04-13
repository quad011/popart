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
  <div class="o-title-and-socials my-10 sm:mt-20 sm:mb-32 relative">
    <!-- LEFT CIRCLES DECORATION -->
    <div
      class="absolute left-0 -top-1/3 hidden sm:flex flex-wrap w-[3rem] lg:w-[3rem] ml-2"
    >
      <div v-for="i in 10" class="w-1/2 flex items-center justify-center p-1">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[16px] h-[16px] border-[3px] border-red rounded-full"
        >
        </c-animated-element>
      </div>
    </div>
    <!-- END :: LEFT CIRCLES DECORATION -->

    <!-- ANIMATED ARROWS -->
    <div class="absolute -top-[1vw] left-[70vw]">
      <a-animate-arrows />
    </div>
    <!-- END :: ANIMATED ARROWS -->

    <!-- RIGHT DECORATION -->
    <div class="absolute right-[5vw] -top-1/4 w-[2rem] lg:w-[3rem] ml-2">
      <c-animated-element :rotate="-90" :delay="0.2">
        <img
          src="/svg/star1.svg"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
    </div>
    <!-- END :: RIGHT DECORATION -->

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
