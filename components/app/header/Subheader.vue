<script setup lang="ts">
import { useCategoriesQuery } from "~/queries/categories";
const { data: linksData } = useCategoriesQuery()
</script>

<template>
  <section class="w-full flex justify-center space-x-4">
    <NuxtLink
        v-for="link in linksData"
        :to="link.url"
        class="flex gap-2"
        :key="link.url"
    >
      <component :is="getCategoryIcon(link.icon)"/>
        {{ link.display }}
    </NuxtLink>
  </section>
</template>

<style scoped>

</style>