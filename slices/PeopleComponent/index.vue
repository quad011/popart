<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-people-component
    :title="getPrimary('title')"
    :text="getPrimary('text')"
    :items="getPrimary('items')"
  />
</template>
