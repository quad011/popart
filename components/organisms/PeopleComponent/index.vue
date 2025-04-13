<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  text: {
    type: Array,
  },
  items: {
    type: [Array, Object],
  },
});

onMounted(() => {
  console.log("items", props.items);
});
</script>

<template>
  <div
    class="o-people-component flex flex-wrap relative my-10 sm:my-40 px-4 sm:px-16 lg:px-40"
  >
    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- BOXES -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-12 w-full"
    >
      <c-animated-element
        :fromY="50"
        :toY="0"
        :delay="index * 0.1"
        v-for="(item, index) in items"
        :key="index"
        class="mb-9 last:mb-0"
      >
        <m-people-box
          :title="item.title"
          :text="item.text"
          :image="item.image"
          :url="item.link"
        />
      </c-animated-element>
    </div>
    <!-- END :: BOXES -->

    <!-- TEXT -->
    <c-animated-element :fromY="50" :toY="0">
      <PrismicRichText
        :field="text"
        wrapper="div"
        class="text-h5 sm:text-h4 lg:text-h3 font-AspergitBold !leading-tight mt-9"
      />
    </c-animated-element>
    <!-- END :: TEXT -->
  </div>
</template>
