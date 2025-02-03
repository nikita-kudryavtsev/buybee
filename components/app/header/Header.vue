<script setup lang="ts">
import UserMenu from "~/components/app/header/UserMenu.vue";
import ThemeSwitcher from "~/components/app/header/ThemeSwitcher.vue";
import {ShoppingBasketIcon, HeartIcon, MenuIcon} from "lucide-vue-next";
import Subheader from "~/components/app/header/Subheader.vue";
import { useCategoriesQuery } from "~/queries/categories";
import { useFavoriteQuery } from "~/queries/favorites";
import ButtonWithBadge from "~/components/app/ButtonWithBadge.vue";

const { data: categories } = useCategoriesQuery()
const { getSumAndCount } = useBasket()
const { data: favorites } = useFavoriteQuery()
</script>

<template>
  <header class="border-b space-y-2 pb-3 mb-6" >
    <div class="h-16 flex justify-between items-center px-4 space-x-6">
<!--      Каталог -->
      <DropdownMenu v-if="categories">
        <DropdownMenuTrigger>
          <Button>
            Каталог
            <MenuIcon/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Категории товаров</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <NuxtLink v-for="category in categories" :to="category.url" >
            <DropdownMenuItem class="hover:cursor-pointer"> {{ category.display }}</DropdownMenuItem>
          </NuxtLink>
        </DropdownMenuContent>
      </DropdownMenu>
<!--      Поиск товаров-->
      <Input placeholder="Найти товары"/>
<!--      Правый блок элементов-->
      <NuxtLink to="/favorites" class="!m-1">
        <ButtonWithBadge :badge-value="favorites?.length">
          <template #icon>
            <HeartIcon />
          </template>
        </ButtonWithBadge>
      </NuxtLink>
      <NuxtLink to="/basket" class="!m-1">
        <ButtonWithBadge :badge-value="getSumAndCount?.count">
          <template #icon><ShoppingBasketIcon/></template>
        </ButtonWithBadge>
      </NuxtLink>
      <ThemeSwitcher/>
      <UserMenu/>
    </div>

    <Subheader />
  </header>
</template>