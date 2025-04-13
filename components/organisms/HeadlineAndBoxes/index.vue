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
    class="o-headline-and-boxes flex flex-wrap relative overflow-hidden my-10 sm:my-20 px-4 sm:px-16 lg:px-40"
  >
    <!-- OCTAGON DECORATION -->
    <div
      class="absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/4 hidden sm:flex flex-wrap w-[5rem] lg:w-[7rem]"
    >
      <div v-for="i in 15" class="w-1/3 flex items-center justify-center">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[1.33rem] h-[1.33rem] m-1 lg:m-2"
        >
          <a-octagon class="stroke-blue2" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: OCTAGON DECORATION -->

    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 sm:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- BOXES -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4 lg:gap-x-12"
    >
      <c-animated-element
        :fromY="50"
        :toY="0"
        :delay="index * 0.1"
        v-for="(item, index) in items"
        :key="index"
        class="mb-8 md:mb-10 last:mb-0"
      >
        <m-box :title="item.title" :text="item.text" />
      </c-animated-element>
    </div>
    <!-- END :: BOXES -->
  </div>
</template>

<style lang="scss" scoped>
.o-page-header {
}
</style>
