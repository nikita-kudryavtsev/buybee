<script setup lang="ts">

import { BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink, Breadcrumb, BreadcrumbPage } from "~/components/ui/breadcrumb";

const props = defineProps<{
  items: any[]
}>()
</script>

<template>
  <Breadcrumb >
    <BreadcrumbList>
      <template v-for="item in [...items?.slice(0, -1)]">
        <BreadcrumbItem >
          <BreadcrumbLink>
            <NuxtLink :to="item.to" >
              {{ item.display }}
            </NuxtLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
      </template>
      <BreadcrumbItem>
        <BreadcrumbPage>{{ items[items.length - 1].display }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<style scoped>

</style>