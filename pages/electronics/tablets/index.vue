<script setup lang="ts">
import { useProductsQuery } from "~/queries/products";
import ProductCard from "~/components/app/product/ProductCard.vue";
import ProductFilter from "~/components/app/product/ProductFilter.vue";

definePageMeta({
  layout: 'default',
})

const filters = ref({})

const { data: products, refetch } = useProductsQuery(filters)

const onApplyFilters = (payload: any) => {
  filters.value = { group: 'tablets', ...payload }
  refetch()
}

const breadcrumbs = ref([
  { display: 'Электроника', to: '/electronics'},
  { display: 'Планшеты' },
])
</script>

<template>
  <section id="breadcrumbs">
    <AppBreadscrumb class="flex justify-center" :items="breadcrumbs"/>
  </section>
  <section class="flex">
    <div class="w-1/4 p-3 space-y-4">
      <ProductFilter @apply-filters="onApplyFilters"/>
    </div>
    <div class="w-3/4">

      <div class="flex flex-wrap content-start p-4">
        <NuxtLink v-for="product in products" :to="`tablets/${product.id}`" class="w-1/4 p-3">
          <ProductCard :item="product" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>