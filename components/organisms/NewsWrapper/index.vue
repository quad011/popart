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
    class="o-news-wrapper my-10 px-4 sm:px-16 lg:px-40 mt-10 mb-10 md:mb-20 md:mt-28 lg:mt-40 relative"
  >
    <!-- RIGHT STAR DECORATIONS -->
    <div class="absolute right-[6vw] -top-[12vw]`">
      <c-animated-element
        :rotate="-90"
        :delay="0.1"
        class="w-[2.5rem] lg:w-[3.4rem]"
      >
        <img
          src="/svg/star4.svg"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
    </div>
    <!-- END :: RIGHT STAR DECORATIONS -->

    <!-- ANIMATED ARROWS -->
    <div class="absolute -top-[4vw] left-[57vw]">
      <a-animate-arrows />
    </div>
    <!-- END :: ANIMATED ARROWS -->

    <!-- OCTAGON DECORATIONS -->
    <div
      class="absolute sm:left-1 -top-0 -translate-y-full hidden sm:flex flex-wrap w-[3rem]"
    >
      <div v-for="i in 10" class="w-1/2 flex items-center justify-center">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[.73rem] h-[.73rem] m-1"
        >
          <a-octagon class="stroke-blue2" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: OCTAGON DECORATIONS -->

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

    <!-- LEFT BOTTOM STAR DECORATIONS -->
    <div
      class="absolute left-[2vw] lg:left-[6vw] -bottom-[9vw] lg:-bottom-[7vw] hidden sm:block"
    >
      <c-animated-element
        :rotate="-90"
        :delay="0.1"
        class="w-[2.5rem] lg:w-[3.4rem]"
      >
        <img
          src="/svg/star3.svg"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
    </div>
    <!-- END :: LEFT BOTTOM STAR DECORATIONS -->

    <!-- ANIMATED ARROWS -->
    <div class="absolute -bottom-[9vw] lg:-bottom-[7vw] left-[75vw]">
      <a-animate-arrows />
    </div>
    <!-- END :: ANIMATED ARROWS -->
  </div>
</template>
