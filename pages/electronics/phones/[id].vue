<script setup lang="ts">
import { useProductQuery } from "~/queries/product";
import { Badge } from "~/components/ui/badge";
import useBasketItem from "~/composables/useBasketItem";

const route = useRoute()
import FavoritesButton from "~/components/app/favorites/FavoritesButton.vue";
import BasketCounter from "~/components/app/basket/BasketCounter.vue";
import ProductCarousel from "~/components/app/product/ProductCarousel.vue";

const {data, isLoading} = useProductQuery(route.params.id as string)
const {currentProdInBasket, addToBasket} = useBasketItem(data)

const characteristics = computed(() => {
  if (!data.value?.characterisics) return []
  else {
    try {
      return JSON.parse(data.value.characterisics)
    } catch (e) {
      return []
    }
  }
})

const breadCrumbsItems = computed(() => [
  { display: 'Электроника', to: '/electronics'},
  { display: 'Телефоны', to: '/electronics/phones'},
  { display: data.value?.display },
])
</script>

<template>
  <section v-if="data" class="flex justify-center pb-4">
    <AppBreadscrumb :items="breadCrumbsItems"/>
  </section>
  <section v-if="!isLoading && data" class="flex gap-4 justify-around pt-4">
    <div class="w-2/3 h-[500px] flex items-center justify-center">
      <div class="flex justify-center">
        <ProductCarousel :urls="JSON.parse(data.imgUrls || '[]')"/>
      </div>
    </div>

    <article class="flex flex-col gap-6 border-2 p-6 rounded-lg w-1/3">
      <div class="text-xl">{{ data.display }}</div>
      <Badge class="text-xl w-fit bg-green-600">{{ data.price }} ₽</Badge>
      <div>
        <div v-for="item in characteristics" class="border-b-2 flex">
          <div class="text-gray-500">{{ item.display }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <Button v-if="!currentProdInBasket" @click="addToBasket">Добавить в корзину</Button>

        <div v-else class="flex gap-3 items-center">
          <NuxtLink to="/basket">
            <Button>Перейти в корзину</Button>
          </NuxtLink>
          <BasketCounter :data="data"/>
        </div>

        <FavoritesButton :item="data"/>
      </div>
    </article>
  </section>
</template>

<style scoped>

</style>