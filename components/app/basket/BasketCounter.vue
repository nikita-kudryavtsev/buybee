<script setup lang="ts">
const props = defineProps<{ data: any }>()
const {
  addToBasket,
  currentProdInBasket,
  removeFromBasket,
} = useBasketItem(computed(() => props.data))
</script>

<template>
  <div class="ml-auto space-x-3">
    <Button @click="removeFromBasket" size="sm">-</Button>
    <span class="text-xl">{{ currentProdInBasket?.count }} </span>
    <Button @click="addToBasket" size="sm">+</Button>
  </div>
</template>