<script setup>
import decorations from "./decorationsConfig";

const props = defineProps({
  title: {
    type: Array,
  },
  text: {
    type: Array,
  },
  link: {
    type: Object,
  },
});

onMounted(() => {
  console.log("link", props.link);
});
</script>

<template>
  <div class="o-page-header flex items-end relative overflow-hidden">
    <div
      class="relative z-10 px-4 sm:pl-16 lg:pl-28 sm:pr-16 lg:pr-28 my-20 lg:my-36 flex flex-col sm:items-end w-full"
    >
      <!-- TITLE -->
      <c-animated-element :fromY="50" :toY="0">
        <m-title :title="title" innerClass="text-[6.3vw] lg:text-[5.885vw]" />
      </c-animated-element>
      <!-- END :: TITLE -->

      <div>
        <div class="sm:w-3/5 lg:w-4/5 ml-auto mt-7">
          <!-- TEXT -->
          <c-animated-element :fromY="50" :toY="0" :delay="0.1">
            <PrismicRichText :field="text" wrapper="div" class="content" />
          </c-animated-element>
          <!-- END :: TEXT -->

          <!-- BTN -->
          <div class="w-1/2 sm:w-[217px] mt-8" v-if="link && link.uid">
            <c-animated-element :fromY="50" :toY="0" :delay="0.2">
              <a-button
                :title="link?.text"
                :linkUrl="link.uid"
                class="text-18"
              />
            </c-animated-element>
          </div>
          <!-- END :: BTN -->
        </div>
      </div>
    </div>

    <!-- DECORATIONS -->
    <c-animated-element
      v-for="(decor, index) in decorations"
      :key="index"
      :rotate="decor.rotate"
      :delay="index * 0.1"
      :class="`absolute ${decor.class} w-auto`"
    >
      <img :src="decor.img" class="w-full h-full object-contain" alt="popart" />
    </c-animated-element>
    <!-- END :: DECORATIONS -->

    <!-- LEFT CIRCLE DECORATION -->
    <div
      class="absolute left-0 bottom-0 hidden sm:flex flex-wrap w-[3rem] lg:w-[3rem] ml-2"
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
    <!-- END :: LEFT CIRCLE DECORATION -->
  </div>
</template>

<style lang="scss" scoped>
.o-page-header {
}
</style>
