<script setup lang="ts">

import { Checkbox } from "~/components/ui/checkbox";

const {isSelectedAllCheckboxes, toggleAllCheckboxes, removeSelected} = useBasket()
</script>

<template>
  <article class="w-full rounded-xl border py-3 px-5 flex space-x-3 items-center">
    <div class="space-x-2 flex items-center">
      <Checkbox id="basket-select-all" :checked="isSelectedAllCheckboxes" @update:checked="toggleAllCheckboxes"/>
      <Label for="basket-select-all">Выбрать все</Label>
    </div>
    <Button variant="ghost" class="text-red-600" @click="removeSelected">Удалить выбранное</Button>
  </article>
</template>