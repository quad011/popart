<script setup>
const props = defineProps({
  slice: Object,
});
const { getPrimary } = useSlice(props.slice);
</script>

<template>
  <o-video-component
    :title="getPrimary('title')"
    :video="getPrimary('video')"
  />
</template>
