<script setup>
const props = defineProps({
  title: {
    type: Array,
  },
  video: {
    type: Object,
  },
});

const playing = ref(false);

onMounted(() => {});
</script>

<template>
  <div class="o-video-component my-20 px-4 sm:px-16 lg:px-40 relative">
    <!-- TITLE -->
    <c-animated-element :fromY="50" :toY="0">
      <m-title
        :title="title"
        innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
      />
    </c-animated-element>
    <!-- END :: TITLE -->

    <!-- VIDEO -->
    <div class="flex relative">
      <c-html-video
        v-if="video && video.url"
        :playing="playing"
        :src="video.url"
        :autoplay="playing"
        preload="metadata"
        :controls="playing"
        :muted="playing"
        :loop="true"
        class="aspect-[2]"
      />

      <!-- PLAY BTN -->
      <div
        @click="playing = !playing"
        class="absolute center w-[3rem] h-[3rem] rounded-full bg-white/50 border border-white flex flex-center"
      >
        <t-gsap
          :from="{
            opacity: 0,
          }"
          :to="{
            opacity: 1,
            duration: 1,
            ease: 'Power2.easeOut',
          }"
        >
          <img
            :key="playing"
            :src="playing ? '/svg/pause.svg' : '/svg/play.svg'"
            class="h-4"
            alt="popart"
          />
        </t-gsap>
      </div>
      <!-- END :: PLAY BTN -->
    </div>
    <!-- END :: VIDEO -->
  </div>
</template>
