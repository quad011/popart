<script setup>
import { useHead } from "#imports";
const error = useError();
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });

useHead({
  title: "Popart - 404 Not Found",
});
</script>

<template>
  <div
    class="error fixed left-0 top-0 w-full h-full flex flex-col flex-center py-20"
  >
    <h1
      class="text-92 md:text-180 lg:text-[15rem] flex items-center md:mb-5 lg:mb-0"
    >
      <c-animated-element :fromY="50" :toY="0">
        <span>404</span>
      </c-animated-element>
    </h1>
    <c-animated-element :fromY="50" :toY="0" :delay="0.3">
      <h2 class="text-24 md:text-60 lg:text-92 mb-5">Page not found</h2>
    </c-animated-element>
    <c-animated-element :fromY="50" :toY="0" :delay="0.4">
      <a-button @click="handleError" title="Go Back" class="!px-10" />
    </c-animated-element>
  </div>
</template>

<style lang="scss">
.spiner {
  animation: rotate-div 3s infinite ease-in-out;
}
@keyframes rotate-div {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
}
</style>
