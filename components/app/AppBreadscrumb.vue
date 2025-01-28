<script setup lang="ts">

import { BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink, Breadcrumb, BreadcrumbPage } from "~/components/ui/breadcrumb";
import { Slash } from 'lucide-vue-next'
// const props = defineProps<{
//   items: any[]
// }>()
const items = [
  { display: 'Электроника', to: '/electronics'},
  { display: 'Телефоны', to: '/'},
  // { display: '', to: ''}
    ]
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="item in [...items.slice(0, -1)]">
        <BreadcrumbItem >
          <BreadcrumbLink>
            <NuxtLink :to="item.to" >
              {{ item.display }}
            </NuxtLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>

        <BreadcrumbItem>
          <BreadcrumbPage>{{ items?.[items.length - 1].display }}</BreadcrumbPage>
        </BreadcrumbItem>
      </template>

    </BreadcrumbList>
  </Breadcrumb>
</template>

<style scoped>

</style>