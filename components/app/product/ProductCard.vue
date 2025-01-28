<script setup lang="ts">
const props = defineProps<{ item: any }>()
</script>

<template>
  <div class="w-48 h-fit" >
    <div class="flex justify-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s" alt="">
    </div>

    <div class="text-center">
      <div class="text-red-500"> {{ item.price }} ₽</div>
      {{ item.display }}
      <div class="text-gray-500"> {{ item.description }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>