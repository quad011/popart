<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  items: {
    type: [Object, Array],
  },
});

const { linkResolver } = useLinkResolver();

onMounted(() => {
  console.log("news", props.items);
});
</script>

<template>
  <div
    class="o-news-wrapper overflow-hidden my-10 sm:my-0 px-4 sm:px-20 lg:px-40 pt-40 relative"
  >
    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 lg:text-h2 tracking-tighter mb-5"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- NEWS -->
    <div class="grid grid-cols-2 gap-x-10">
      <PrismicLink
        v-for="(item, index) in items"
        :key="item.key"
        :to="linkResolver(item.item)"
        class="mb-1 last:mb-0 text-14 lg:text-base"
      >
        <m-news-box
          :title="item.item.data.title"
          :text="item.item.data.preview_text"
        />
      </PrismicLink>
    </div>
    <!-- END :: NEWS -->
  </div>
</template>
