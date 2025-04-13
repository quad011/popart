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
    class="o-headline-and-boxes flex flex-wrap relative overflow-hidden mt-10 lg:mt-0 px-4 sm:px-16 lg:px-40"
  >
    <!-- OCTAGON TOP DECORATION -->
    <div class="absolute right-20 top-0 w-[2rem]">
      <c-animated-element :fromScale="0" :toScale="1" :delay="0.1">
        <img src="/svg/octagon.svg" alt="popart" />
      </c-animated-element>
    </div>
    <!-- END :: OCTAGON TOP DECORATION -->

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
        innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
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
        class="mb-8 md:mb-20 last:mb-0"
      >
        <m-box :title="item.title" :text="item.text" />

        <!-- TWO OCTAGON DECORATION -->
        <div
          v-if="index === items.length - 3"
          class="absolute right-0 top-0 -translate-y-1/2 lg:-translate-y-full"
        >
          <c-animated-element
            v-for="i in 2"
            class="flex items-center justify-center"
            :fromScale="0"
            :toScale="1"
            :delay="i * 0.5"
            :rotate="i === 1 ? 180 : -180"
            :class="
              i === 1
                ? 'w-[3rem] h-[3rem]'
                : 'w-[1.66rem] h-[1.66rem] absolute -top-[30%] -right-[18%] z-10'
            "
          >
            <a-hexa class="stroke-green" />
          </c-animated-element>
        </div>
        <!-- END :: TWO OCTAGON DECORATION -->
      </c-animated-element>
    </div>
    <!-- END :: BOXES -->
  </div>
</template>
