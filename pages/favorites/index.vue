<script setup lang="ts">

import ProductCard from "~/components/app/product/ProductCard.vue";
import { useFavoriteQuery } from "~/queries/favorites";
import FavoritesCard from "~/components/app/favorites/FavoritesCard.vue";
const { data: favorites} = useFavoriteQuery()

</script>

<template>
  <div class="flex space-x-16">
    <FavoritesCard v-for="item in favorites" :data="item"/>
  </div>
</template>

<style scoped>

</style>