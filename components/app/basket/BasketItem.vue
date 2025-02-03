<script setup lang="ts">
import { Checkbox } from "~/components/ui/checkbox";
import useBasketItem from "~/composables/useBasketItem";
import FavoritesButton from "~/components/app/favorites/FavoritesButton.vue";
import BasketCounter from "~/components/app/basket/BasketCounter.vue";

const props = defineProps<{ data: any }>()
const {currentProdInBasket, toggleCheckbox} = useBasketItem(computed(() => props.data))
</script>

<template>
  <article class="flex flex-row w-full py-3 px-5 items-center gap-3 rounded-lg border">
    <Checkbox :checked="currentProdInBasket.checked" @update:checked="toggleCheckbox"/>
    <img width="80px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s"
         alt="">
    <span>{{ data.display }}</span>
    <div>{{ data.description }}</div>
    <div>{{ data.price }}</div>
    <div>{{ data.name }}</div>

    <BasketCounter :data="data"/>
    <FavoritesButton :item="data"/>
  </article>
  <Card>

  </Card>
</template>

<style scoped>

</style>