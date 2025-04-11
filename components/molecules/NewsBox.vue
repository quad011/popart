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
  <div class="m-news-box">
    <PrismicRichText
      :field="title"
      wrapper="div"
      class="text-h4 font-AspergitBold tracking-tight"
    />
    <PrismicRichText :field="text" wrapper="div" class="content" />
  </div>
</template>

<style lang="scss">
.m-news-box {
}
</style>
