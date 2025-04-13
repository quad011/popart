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
    class="o-quote-component overflow-hidden my-10 lg:my-40 px-4 sm:px-16 lg:px-40 relative flex flex-wrap"
  >
    <div class="w-full sm:w-1/3 overflow-hidden mb-10 sm:mb-0">
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
            class="content pl-9 lg:pr-9 quote tracking-tighter"
          />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: INFO -->
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
