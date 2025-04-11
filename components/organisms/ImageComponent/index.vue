<script setup>
const props = defineProps({
  image: {
    type: Object,
  },
});

onMounted(() => {});
</script>

<template>
  <div
    class="o-image-component overflow-hidden my-10 sm:my-0 px-4 sm:px-20 lg:px-40 relative"
  >
    <!-- IMAGE -->
    <div
      v-if="image && image.url"
      class="image-wrapper overflow-hidden aspect-video lg:aspect-[1.6] relative z-10"
    >
      <c-animated-element :fromScale="1.1" :toScale="1" class="h-full">
        <c-parallax :factor="0.3">
          <c-picture
            class="h-full"
            innerClass=""
            :image="image"
            sizes="sm:375px md:768px lg:1200px xl:1200px"
            :alt="image?.alt || 'popart'"
          />
        </c-parallax>
      </c-animated-element>
    </div>
    <!-- END :: IMAGE -->
  </div>
</template>

<style lang="scss" scoped>
.o-image-component {
}
</style>
