<script setup lang="ts">
const getPromoCode = () => {
  // ...
}
const promoCodes = ref([])
const loadPromoCodes = () => {
  // fetch ... promoCodes.value = response
}
</script>

<template>
  <Button @click="getPromoCode">Получить промокод</Button>
  <div>im promocode</div>
  <pre>{{ promoCodes }}</pre>
</template>

<style scoped>

</style>