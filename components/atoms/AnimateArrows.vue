<script setup>
const props = defineProps({});
</script>

<template>
  <div class="animate-arrows flex">
    <c-animated-element
      v-for="i in 3"
      :fromX="-50"
      :toX="0"
      :delay="(3 - i) * 0.2"
    >
      <a-arrow
        class="w-3 md:w-4 h-auto"
        :class="`arrow arrow--${i} relative`"
      />
    </c-animated-element>
  </div>
</template>

<style lang="scss" scoped>
.animate-arrows {
  .arrow {
    &--1 {
      @apply fill-red left-[4px];
    }
    &--2 {
      @apply fill-orange;
    }
    &--3 {
      @apply fill-blue left-[-4px];
    }
  }
}
</style>
