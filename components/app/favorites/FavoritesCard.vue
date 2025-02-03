<script setup lang="ts">
import ProductCard from "~/components/app/product/ProductCard.vue";
import FavoritesButton from "~/components/app/favorites/FavoritesButton.vue";
import BasketCounter from "~/components/app/basket/BasketCounter.vue";

const props = defineProps<{ data: any }>()
const { addToBasket, currentProdInBasket } = useBasketItem(computed(() => props.data))
</script>

<template>
  <ProductCard :item="data">
    <template #bottom>
      <div class="flex items-center justify-center pt-2">
        <Button v-if="!currentProdInBasket?.count" @click="addToBasket" class="w-full mt-2">Добавить в корзину</Button>
        <BasketCounter v-else :data="data" />
        <FavoritesButton :item="data"/>
      </div>
    </template>
  </ProductCard>
</template>