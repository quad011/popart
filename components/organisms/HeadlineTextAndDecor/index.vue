<script setup>
import decorations from "./decorationsConfig";
const props = defineProps({
  title: {
    type: Array,
  },
  text: {
    type: Array,
  },
});

onMounted(() => {});
</script>

<template>
  <div
    class="o-headline-text-and-decor flex flex-wrap relative overflow-hidden pt-10 md:pt-20 lg:pt-32 px-4 sm:px-20 lg:px-40"
  >
    <!-- CIRCLE TOP DECORATION -->
    <div
      class="absolute right-0 top-0 hidden sm:flex flex-wrap w-[3rem] lg:w-[3rem] mr-1"
    >
      <div v-for="i in 10" class="w-1/2 p-1">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[22px] h-[22px]"
        >
          <a-octagon class="stroke-blue" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: CIRCLE TOP DECORATION -->

    <!-- CIRCLE BOTTOM DECORATION -->
    <div
      class="absolute left-0 bottom-[10vw] hidden sm:flex flex-wrap w-[3rem] lg:w-[3rem] ml-1"
    >
      <div v-for="i in 10" class="w-1/2 p-1">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[22px] h-[22px]"
        >
          <a-octagon class="stroke-red" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: CIRCLE BOTTOM DECORATION -->

    <div class="w-full md:w-4/5 lg:w-3/4 lg:pr-10">
      <!-- TITLE -->
      <c-animated-element :fromY="50" :toY="0">
        <m-title
          :title="title"
          innerClass="text-h4 lg:text-h2 tracking-tighter mb-5"
        />
      </c-animated-element>
      <!-- END :: TITLE -->

      <!-- TEXT -->
      <c-animated-element :fromY="50" :toY="0" :delay="0.1">
        <PrismicRichText :field="text" wrapper="div" class="content mb-16" />
      </c-animated-element>
      <!-- END :: TEXT -->
    </div>

    <div class="w-1/5 lg:w-1/4 hidden md:flex items-center justify-center">
      <!-- DECORATIONS -->
      <c-animated-element
        v-for="(decor, index) in decorations"
        :key="index"
        :rotate="decor.rotate"
        :delay="index * 0.1"
        :class="` ${decor.class} w-auto`"
      >
        <img
          :src="decor.img"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
      <!-- END :: DECORATIONS -->
    </div>

    <div class="w-full">
      <img src="/img/video.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.o-page-header {
}
</style>
