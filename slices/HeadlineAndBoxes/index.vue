<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-headline-and-boxes
    :title="getPrimary('title')"
    :items="getPrimary('items')"
  />
</template>
