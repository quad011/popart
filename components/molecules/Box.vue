<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: Array,
  },
});
</script>

<template>
  <div class="m-box">
    <h3
      v-html="title"
      class="text-h5 2xl:text-h4 font-AspergitBold mb-3 md:mb-5"
    />
    <PrismicRichText :field="text" wrapper="div" class="content" />
  </div>
</template>

<style lang="scss">
.m-box {
}
</style>
