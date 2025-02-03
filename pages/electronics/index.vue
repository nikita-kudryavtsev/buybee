<script setup lang="ts">
import { useProductGroups } from "~/queries/product-groups";

const {data: electronics} = useProductGroups('electronics')

definePageMeta({
  name: 'electronics',
})

</script>

<template>
  <div class="flex overflow-auto flex-wrap justify-around gap-4">
    <NuxtLink v-for="electronic in electronics" class="w-60" :to="electronic.url">
      <article class="flex flex-col justify-center items-center" :class="{'opacity-50' : !electronic.url}">

        <img :src="electronic.imgUrl" alt="image" class="rounded-2xl w-52">
        <div class="text-center">
          {{ electronic.display }}
        </div>
      </article>
    </NuxtLink>
  </div>

</template>

<style scoped>

</style>