<script setup lang="ts">
import { NavigationMenu, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";

const links = [
  {
    label: 'Главная страница',
    to: '/'
  },
  {
    label: 'Список товаров',
    to: '/goods'
  },
  {
    label: 'Главная страница',
    to: '/'
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="link in links" :key="link.to">
        <NuxtLink
            :to="link.to"
            :class="navigationMenuTriggerStyle()"
        >
          <NavigationMenuLink >
            {{ link.label }}
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

</template>

<style scoped>

</style>