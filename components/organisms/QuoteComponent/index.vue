<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  caption: {
    type: String,
  },
  text: {
    type: Array,
  },
  image: {
    type: Object,
  },
});

onMounted(() => {});
</script>

<template>
  <div
    class="o-quote-component my-20 sm:my-32 px-4 sm:px-16 lg:px-40 relative flex flex-wrap"
  >
    <!-- LEFT DECORATIONS -->
    <div class="absolute left-4 sm:left-[5vw] top-[-10vw] sm:-top-[15vw]">
      <c-animated-element
        :rotate="90"
        :fromScale="0"
        :toScale="1"
        :delay="0.1"
        class="w-[3.333rem] h-auto"
      >
        <img
          src="/svg/star3.svg"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
    </div>
    <!-- END :: LEFT DECORATIONS -->

    <!-- ANIMATED ARROWS -->
    <div class="absolute -top-[10vw] sm:-top-1/4 left-1/2 -translate-x-1/2">
      <a-animate-arrows />
    </div>
    <!-- END :: ANIMATED ARROWS -->

    <div class="w-full sm:w-1/3 mb-10 sm:mb-0 relative">
      <!-- IMAGE -->
      <c-animated-element :fromScale="1.1" :toScale="1" class="h-full">
        <c-picture
          class="h-full"
          innerClass=""
          :image="image"
          sizes="sm:375px md:768px lg:1200px xl:1200px"
          :alt="image?.alt || 'popart'"
        />
      </c-animated-element>
      <!-- END :: IMAGE -->

      <!-- TWO HEPTA DECORATION -->
      <div class="absolute right-0 bottom-0">
        <c-animated-element
          v-for="i in 2"
          class="flex items-center justify-center"
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.5"
          :rotate="i === 1 ? 180 : -180"
          :class="
            i === 1
              ? 'w-[3.5rem] h-[3.5rem] relative right-[-4vw]'
              : 'w-[2.66rem] h-[2.66rem] absolute -top-[40%] sm:-top-[25%] right-[36%] sm:right-0 z-10'
          "
        >
          <a-hepta
            :class="{
              'stroke-green fill-purple': i === 1,
              'stroke-red fill-purple': i === 2,
            }"
          />
        </c-animated-element>
      </div>
      <!-- END :: TWO HEPTA DECORATION -->
    </div>

    <!-- INFO -->
    <div class="sm:w-2/3">
      <div class="font-AspergitBold mb-6">
        <c-animated-element :fromY="50" :toY="0">
          <h3 v-html="name" class="text-h4 2xl:text-h3 text-green" />
        </c-animated-element>

        <c-animated-element :fromY="50" :toY="0" :delay="0.1">
          <h4 v-html="caption" />
        </c-animated-element>
      </div>

      <!-- TEXT QUOTE -->
      <div>
        <c-animated-element :fromY="50" :toY="0" :delay="0.2">
          <PrismicRichText
            :field="text"
            wrapper="div"
            class="content pl-11 lg:pr-7 quote tracking-tighter"
          />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: INFO -->

    <!-- HEXA DECORATION -->
    <div class="absolute right-[6vw] bottom-[-5vw]">
      <c-animated-element
        :fromScale="0"
        :toScale="1"
        :delay="0.3"
        :rotate="-180"
        class="w-[2.33rem] h-[2.33rem]"
      >
        <a-hexa class="stroke-green" />
      </c-animated-element>
    </div>
    <!-- END :: HEXA DECORATION -->
  </div>
</template>

<style lang="scss" scoped>
.o-quote-component {
  .quote {
    @apply relative;
    &::after {
      @apply absolute left-0 top-2 w-7 opacity-50;
      content: url("/svg/quote.svg");
    }
  }
}
</style>
