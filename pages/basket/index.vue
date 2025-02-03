<script setup lang="ts">
import { useBasketQuery } from "~/queries/basket";
import BasketItem from "~/components/app/basket/BasketItem.vue";
import BasketCheckout from "~/components/app/basket/BasketCheckout.vue";
import BasketItemsHeader from "~/components/app/basket/BasketItemsHeader.vue";

const { data } = useBasketQuery()
</script>

<template>
  <div class="flex">
    <div class="w-2/3 space-y-6" v-if="data">
      <BasketItemsHeader/>
      <BasketItem v-for="item in data" :key="item.id" :data="item" />
    </div>
    <BasketCheckout class="w-1/3 ml-7"/>
  </div>
</template>

<style scoped>

</style>