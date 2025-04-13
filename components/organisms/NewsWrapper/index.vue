<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  items: {
    type: [Object, Array],
  },
  link: {
    type: Object,
  },
});

// const { linkResolver } = useLinkResolver();

onMounted(() => {});
</script>

<template>
  <div
    class="o-news-wrapper my-10 px-4 sm:px-16 lg:px-40 mt-10 mb-10 md:mb-20 lg:mt-20 lg:mb-28 relative"
  >
    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- NEWS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-3 lg:gap-x-10">
      <c-animated-element
        :fromY="50"
        :toY="0"
        :delay="index * 0.1"
        v-for="(item, index) in items"
        :key="item.key"
        class="mb-10 md:mb-0 last:mb-0 text-14 lg:text-base"
      >
        <m-news-box
          :title="item.item.data.title"
          :text="item.item.data.preview_text"
          :image="item.item.data.featured_image"
          :date="item.item.data.date"
          :url="item.item"
        />
      </c-animated-element>

      <c-animated-element
        :fromY="50"
        :toY="0"
        class="w-1/2 sm:w-3/5 md:w-1/2 lg:w-2/5 mt-4 lg:mt-6"
      >
        <a-button :title="link?.text" :linkUrl="link.url" class="text-18" />
      </c-animated-element>
    </div>
    <!-- END :: NEWS -->
  </div>
</template>
