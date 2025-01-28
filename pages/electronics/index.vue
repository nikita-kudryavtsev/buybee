<script setup lang="ts">
import { useProductGroups } from "~/queries/product-groups";

const { data: electronics } = useProductGroups('electronics')

definePageMeta({
  name: 'electronics',
  middleware: 'auth',
})

</script>

<template>
  <div class="flex overflow-auto flex-wrap justify-around gap-4">
    <NuxtLink v-for="electronic in electronics" class="w-60" :to="electronic.url">
      <article>

        <img src="https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg" alt="">
        <!--        <div :style="electronic.background" class="h-60 w-full rounded-lg mb-2"/>-->
        <div class="text-center">
          {{ electronic.display }}
        </div>
      </article>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>