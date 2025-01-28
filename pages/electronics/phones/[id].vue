<script setup lang="ts">
import { useProductQuery } from "~/queries/product";
const route = useRoute()

const { data, isLoading } = useProductQuery(route.params.id)

onMounted(() => {
  console.log(route.params.id)
})

const something = [
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
  { display: 'Характеристика', value: '333'},
]
</script>

<template>
  <AppBreadscrumb/>
  <div v-if="!isLoading" class="flex gap-4 justify-around">
    <div class="w-[500px] h-[400px] bg-red-200" >
      <div class="flex justify-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s" alt="">
      </div>
    </div>

    <div class="flex flex-col gap-6 border-2 p-6 rounded-lg">
      <div class="text-xl">{{ data.display }}</div>

      <div>
        <div v-for="item in something" class="border-b-2 flex">
          <div class="w-[500px] text-gray-500">{{ item.display }}</div>
          <div>{{ item.value }}</div>
        </div>
      </div>

<!--      <div> {{ data.price }} ₽</div>-->
      <Button class="w-full">Купить за {{ data.price}} ₽</Button>
    </div>
  </div>
</template>

<style scoped>

</style>