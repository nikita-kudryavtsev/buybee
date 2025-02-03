<script setup lang="ts">
import { useBasketQuery } from "~/queries/basket";

const { data } = useBasketQuery()

const { getSumAndCount } = useBasket()
</script>

<template>
  <Card v-if="data" class="p-5 space-y-2">
    <Button class="w-full">Перейти к оформлению</Button>
    <span class="text-slate-500 text-xs">Выбрать способ оплаты и пункт выдачи.</span>
    <section>
      <div class="text-xl font-bold">Ваша корзина</div>
      <div class="flex justify-between">
        <div>Товары ({{ getSumAndCount?.count }})</div>
        <div>{{ getSumAndCount?.price }}</div>
      </div>
    </section>
  </Card>
</template>

<style scoped>

</style>