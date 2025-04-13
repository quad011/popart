<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-news-wrapper
    :title="getPrimary('title')"
    :items="getPrimary('items')"
    :link="getPrimary('link')"
  />
</template>
