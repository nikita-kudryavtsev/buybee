<script setup lang="ts">
import { BabyIcon, PlaneIcon, BellRingIcon, HomeIcon, PlugIcon, ShirtIcon, PercentIcon, BedIcon } from "lucide-vue-next";

const linksData = [
  {
    title: 'Новый год',
    to: '/category/new-year',
    icon: BellRingIcon,
  },
  {
    title: 'Детям',
    to: '/new-year',
    icon: BabyIcon,
  },
  {
    title: 'Дом',
    to: '/new-year',
    icon: HomeIcon,
  },
  {
    title: 'Электроника',
    to: '/category/electronics',
    icon: PlugIcon,
  },
  {
    title: 'Одежда',
    to: '/new-year',
    icon: ShirtIcon,
  }
  ,
  {
    title: 'Акции',
    to: '/new-year',
    icon: PercentIcon,
  },
  {
    title: 'Отели',
    to: '/new-year',
    icon: BedIcon,
  },
  {
    title: 'Билеты на самолет',
    to: '/new-year',
    icon: PlaneIcon,
  }
]
</script>

<template>
  <section class="w-full flex justify-center space-x-4">
    <NuxtLink
        v-for="link in linksData"
        :to="link.to"
        class="flex gap-2"
        :key="link.to"
    >
      <component :is="link.icon"/>
      {{ link.title }}
    </NuxtLink>
  </section>


</template>

<style scoped>

</style>