<script setup>
import { useDateFormat } from "@vueuse/core";
import Item from "../app/Menu/Item.vue";
const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  image: {
    type: Object,
  },
  url: {
    type: Object,
  },
});
</script>

<template>
  <div class="m-people-box">
    <div class="overflow-hidden mb-2 md:mb-4 md:w-[8.333rem]">
      <c-picture
        :imgAttrs="{
          class: '!object-contain',
        }"
        class=""
        innerClass=""
        :image="image"
        sizes="sm:375px md:768px lg:768px xl:768px"
        :alt="image?.alt || 'popart'"
      />
    </div>

    <p
      v-html="title"
      wrapper="div"
      class="text-h5 font-AspergitBold tracking-tight text-green"
    />
    <p v-html="text" class="content text-small" />

    <PrismicLink
      v-if="url && url.text"
      :field="url"
      class="text-green text-18 tracking-tight font-AspergitBold w-2/3 sm:w-full 2xl:w-2/3 block mt-3"
    >
      <a-button :title="url?.text" class="w-full" />
    </PrismicLink>
  </div>
</template>
