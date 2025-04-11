<script setup>
import decorations from "./decorationsConfig";
const props = defineProps({
  title: {
    type: Array,
  },
  items: {
    type: [Array, Object],
  },
});

onMounted(() => {});
</script>

<template>
  <div
    class="o-headline-and-boxes flex flex-wrap relative overflow-hidden pt-10 px-4 sm:px-20 lg:px-40"
  >
    <!-- OCTAGON DECORATION -->
    <div
      class="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/4 hidden sm:flex flex-wrap w-[4rem] lg:w-[7rem]"
    >
      <div v-for="i in 15" class="w-1/3 flex items-center justify-center">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[1.33rem] h-[1.33rem] m-1"
        >
          <a-octagon class="stroke-blue" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: OCTAGON DECORATION -->

    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 lg:text-h2 tracking-tighter mb-5 md:mb-10"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- BOXES -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-12">
      <m-box
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :text="item.text"
        class="mb-5 md:mb-10"
      />
    </div>
    <!-- END :: BOXES -->
  </div>
</template>

<style lang="scss" scoped>
.o-page-header {
}
</style>
