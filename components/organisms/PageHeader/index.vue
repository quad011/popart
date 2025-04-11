<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  text: {
    type: Array,
  },
  link: {
    type: Object,
  },
});

onMounted(() => {
  console.log("link", props.link);
});
</script>

<template>
  <div class="o-page-header flex items-end relative overflow-hidden">
    <div
      class="relative z-10 px-4 lg:pl-28 lg:pr-20 lg:my-36 flex flex-col sm:items-end"
    >
      <!-- TITLE -->
      <c-animated-element :fromY="50" :toY="0">
        <m-title :title="title" innerClass="text-h1" />
      </c-animated-element>
      <!-- END :: TITLE -->

      <div>
        <div class="w-4/5 ml-auto mt-7">
          <!-- TEXT -->
          <c-animated-element :fromY="50" :toY="0" :delay="0.1">
            <PrismicRichText :field="text" wrapper="div" class="l" />
          </c-animated-element>
          <!-- END :: TEXT -->

          <!-- BTN -->
          <div class="w-1/2 sm:w-[217px] mt-8" v-if="link && link.uid">
            <c-animated-element :fromY="50" :toY="0" :delay="0.2">
              <a-button
                :title="link?.text"
                :linkUrl="link.uid"
                class="text-18"
              />
            </c-animated-element>
          </div>
          <!-- END :: BTN -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.o-page-header {
}
</style>
