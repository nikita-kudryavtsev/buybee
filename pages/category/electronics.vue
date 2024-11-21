<script setup lang="ts">
import { useElectronicsQuery } from "~/queries/electronis";

const { data: electronics } = useElectronicsQuery()
</script>

<template>
  <div class="flex overflow-auto flex-wrap justify-around gap-4">
<!--    <article v-for="electronic in electronics" class="w-60" >-->
    <NuxtLink v-for="electronic in electronics" class="w-60" to="/category/electronics">
      <article>

        <div :style="electronic.background" class="h-60 w-full rounded-lg mb-2"/>
        <div class="text-center">
          {{ electronic.title }}
        </div>
      </article>
    </NuxtLink>

<!--    <article class="w-60">-->
<!--      {{ electronics }}-->
<!--      <div style="background-image: url('https://ir-3.ozone.ru/s3/cms/f5/t82/wc250/3.jpg')" class="h-60 w-full rounded-lg mb-2"/>-->
<!--      <div class="text-center">-->
<!--        Ноутбуки-->
<!--      </div>-->
<!--    </article>-->
  </div>
</template>

<style scoped>

</style>