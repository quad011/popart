<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-quote-component
    :name="getPrimary('name')"
    :text="getPrimary('text')"
    :caption="getPrimary('caption')"
    :image="getPrimary('image')"
  />
</template>
