<script setup>
import { components } from "~/slices";
import { usePrismic } from "@prismicio/vue";
import { useAsyncData, createError } from "#imports";
import fetchLinks from "@/config/pageFetchLinks";

const { client } = usePrismic();

const { data: page } = await useAsyncData("page_news", async () => {
  try {
    const document = await client.getSingle("page_news", {
      cache: "no-store",
      fetchLinks,
    });

    if (!document) {
      throw createError({ statusCode: 404, message: "Page not found" });
    }

    return document;
  } catch (err) {
    throw createError({
      statusCode: 404,
      message: err.message || "Page not found",
    });
  }
});

onMounted(() => {});

usePageMeta(page);

// console.log("page.value:", page.value);
// console.log("error:", error);
</script>

<template>
  <div class="page-news">
    <SliceZone v-once :components="components" :slices="page.data.slices" />
    <AppFooter />
  </div>
</template>
