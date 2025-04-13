<script setup>
import gsap from "gsap";
const props = defineProps({
  title: {
    type: String,
  },
  btnBg: {
    type: String,
    default: "green",
  },
  linkUrl: {
    type: String,
  },
  submitBtn: {
    type: Boolean,
    default: false,
  },
});
onMounted(() => {
  const buttons = gsap.utils.toArray(".a-button");
  buttons.forEach((item) => {
    let span = item.querySelector("p");
    let tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    item.addEventListener("mouseenter", () => tl.play(0));
    item.addEventListener("mouseleave", () => tl.reverse());
  });
});
</script>

<template>
  <component
    :is="linkUrl ? 'a' : 'button'"
    :href="linkUrl"
    :class="`a-button bg-${btnBg} px-5 lg:px-12 py-3 flex items-center justify-center pointer-events-auto overflow-hidden`"
  >
    <p
      v-html="title"
      class="text-14 lg:text-18 text-purple uppercase font-AspergitBold whitespace-nowrap"
    />
  </component>
</template>

<style lang="scss" scoped>
.a-button {
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  transition: 0.4s ease;
  @screen lg {
    &:hover {
      clip-path: polygon(10% 0%, 100% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 50%);
    }
  }
}
</style>
