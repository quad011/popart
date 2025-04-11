<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  innerClass: {
    type: String,
  },
});
</script>

<template>
  <div class="m-title uppercase">
    <PrismicRichText
      :field="title"
      wrapper="div"
      :class="`font-AspergitBold ${innerClass}`"
    />
  </div>
</template>

<style lang="scss">
.m-title {
  em {
    font-style: normal;
    color: theme("colors.green");
  }
}
</style>
