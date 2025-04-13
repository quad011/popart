<script setup>
import { useDateFormat } from "@vueuse/core";
const props = defineProps({
  title: {
    type: Array,
  },
  text: {
    type: Array,
  },
  image: {
    type: Object,
  },
  date: {
    type: String,
  },
  url: {
    type: Object,
  },
});

const formattedDate = useDateFormat(props.date, "DD MMM YYYY", {
  locales: "en-US",
});
</script>

<template>
  <div class="m-news-box group">
    <PrismicLink :field="url">
      <div class="overflow-hidden">
        <c-picture
          class="h-full image transition-transform duration-500 lg:group-hover:scale-110"
          innerClass=""
          :image="image"
          sizes="sm:375px md:768px lg:768px xl:768px"
          :alt="image?.alt || 'popart'"
        />
      </div>

      <p
        v-html="formattedDate"
        class="text-18 lg:text-small mb-2 md:mb-3 mt-3"
      />

      <PrismicRichText
        :field="title"
        wrapper="div"
        class="text-h5 lg:text-h4 font-AspergitBold tracking-wide mb-2 md:mb-3"
      />
      <PrismicRichText
        :field="text"
        wrapper="div"
        class="content mb-2 md:mb-3"
      />

      <PrismicLink
        :field="url"
        class="text-green text-18 tracking-tight font-AspergitBold read-more"
      >
        READ MORE
      </PrismicLink>
    </PrismicLink>
  </div>
</template>
