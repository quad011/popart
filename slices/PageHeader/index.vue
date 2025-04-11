<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-page-header
    :title="getPrimary('title')"
    :text="getPrimary('text')"
    :link="getPrimary('link')"
  />
</template>
