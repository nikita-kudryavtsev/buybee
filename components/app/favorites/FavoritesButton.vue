<script setup lang="ts">
import { HeartIcon } from "lucide-vue-next";
const props = defineProps<{
  item: string
}>()

const { isFavoriteItem, toggleFavorites} = useFavoriteItem(computed(() => props.item))
</script>

<template>
  <Button variant="link" :class="isFavoriteItem ? 'text-red-600 hover:text-black' : 'hover:text-red-600'" @click="toggleFavorites">
    <HeartIcon/>
  </Button>
</template>

<style scoped>

</style>