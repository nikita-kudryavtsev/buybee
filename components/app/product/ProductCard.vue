<script setup lang="ts">
const props = defineProps<{ item: any }>()
</script>

<template>
  <div class="w-40 h-fit space-y-3">
    <div class="flex justify-center">
      <img :src="JSON.parse(item.imgUrls || '[]')[0]" alt="">
    </div>

    <div class="text-center">
      <div class="text-red-500"> {{ item.price }} ₽</div>
      {{ item.display }}
      <div class="text-gray-500"> {{ item.description }}</div>
    </div>

    <slot name="bottom"/>
  </div>
</template>

<style scoped>

</style>