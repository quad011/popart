<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-headline-text-and-decor
    :title="getPrimary('title')"
    :text="getPrimary('text')"
  />
</template>
