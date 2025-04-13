<script setup>
import { components } from "~/slices";
import { usePrismic } from "@prismicio/vue";
import { useAsyncData, createError } from "#imports";
import { useRoute } from "vue-router";

const route = useRoute();
const { client } = usePrismic();

const { data: page } = await useAsyncData("article_news", async () => {
  try {
    const document = await client.getByUID("article_news", route.params.uid, {
      cache: "no-store",
    });

    if (!document) {
      throw createError({ statusCode: 404, message: "Article not found" });
    }

    return document;
  } catch (err) {
    throw createError({
      statusCode: 404,
      message: err.message || "Article not found",
    });
  }
});

usePageMeta(page);
</script>

<template>
  <div :class="`article-news ${page.uid}`">
    <o-page-header :title="page.data?.title" />

    <SliceZone v-once :components="components" :slices="page.data.slices" />

    <AppFooter />
  </div>
</template>
