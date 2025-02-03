<script setup lang="ts">
import { useProductQuery } from "~/queries/product";
import { Badge } from "~/components/ui/badge";
import useBasketItem from "~/composables/useBasketItem";
const route = useRoute()

const { data, isLoading } = useProductQuery(route.params.id as string)
const { currentProdInBasket, addToBasket, removeFromBasket} = useBasketItem(data)

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
</script>

<template>
  <section v-if="data" class="flex justify-center pb-4">
    <AppBreadscrumb :items="[
      { display: 'Электроника', to: '/electronics'},
      { display: 'Планшеты', to: '/electronics/phones'},
      { display: data.display },
    ]" />
  </section>
  <section v-if="!isLoading && data" class="flex gap-4 justify-around">
    <div class="w-[500px] h-[400px] flex items-center justify-center" >
      <div class="flex justify-center w-80">
        <img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s" alt="">
      </div>
    </div>

    <article class="flex flex-col gap-6 border-2 p-6 rounded-lg">
      <div class="text-xl">{{ data.display }}</div>
      <Badge class="text-xl w-fit bg-green-600">{{ data.price }} ₽</Badge>
      <div>
        <div v-for="item in characteristics" class="border-b-2 flex">
          <div class="w-[500px] text-gray-500">{{ item.display }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>

      <Button v-if="!currentProdInBasket" @click="addToBasket">Добавить в корзину</Button>
      <div v-else class="w-full flex gap-3 justify-center items-center">
        <NuxtLink to="/basket">
          <Button>Перейти в корзину</Button>
        </NuxtLink>
        <Button @click="addToBasket">+</Button>
        <span class="text-xl">{{ currentProdInBasket?.count }} </span>
        <Button @click="removeFromBasket">-</Button>
      </div>

    </article>
  </section>
</template>

<style scoped>

</style>