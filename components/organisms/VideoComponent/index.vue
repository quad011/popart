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
    <!-- DECORATIONS -->
    <div class="absolute left-[1vw] lg:left-[7vw] -top-[2vw] hidden sm:block">
      <c-animated-element
        :rotate="-90"
        :delay="0.1"
        class="w-[2.5rem] lg:w-[3.4rem]"
      >
        <img
          src="/svg/star2.svg"
          class="w-full h-full object-contain"
          alt="popart"
        />
      </c-animated-element>
    </div>
    <!-- END :: DECORATIONS -->

    <!-- RIGHT DECORATION -->
    <div
      class="absolute right-0 top-[-8vw] hidden sm:flex flex-wrap w-[3rem] lg:w-[3rem] ml-1"
    >
      <div v-for="i in 10" class="w-1/2 p-1">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="i * 0.1"
          class="w-[22px] h-[22px]"
        >
          <a-octagon class="stroke-red" />
        </c-animated-element>
      </div>
    </div>
    <!-- END :: RIGHT DECORATION -->

    <div class="relative">
      <!-- TITLE -->
      <c-animated-element :fromY="50" :toY="0">
        <m-title
          :title="title"
          innerClass="text-h4 md:text-h3 lg:text-h2 tracking-tighter mb-5 md:mb-10"
        />
      </c-animated-element>
      <!-- END :: TITLE -->

      <!-- HEXA DECORATION -->
      <div class="absolute xl:left-[45vw] top-[3vw]">
        <c-animated-element
          :fromScale="0"
          :toScale="1"
          :delay="0.3"
          :rotate="-180"
          class="w-[2rem] h-[2rem]"
        >
          <a-hexa class="stroke-green" />
        </c-animated-element>
      </div>
      <!-- END :: HEXA DECORATION -->
    </div>

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
        class="absolute center w-[3rem] h-[3rem] rounded-full bg-white/30 border border-white flex flex-center"
      >
        <t-gsap
          :from="{
            opacity: 0,
          }"
          :to="{
            opacity: 1,
            duration: 2,
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
