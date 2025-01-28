<script setup lang="ts">
import UserMenu from "~/components/app/header/UserMenu.vue";
import ThemeSwitcher from "~/components/app/header/ThemeSwitcher.vue";
import {ShoppingBasketIcon, HeartIcon, MenuIcon} from "lucide-vue-next";
import Subheader from "~/components/app/header/Subheader.vue";
import { useCategoriesQuery } from "~/queries/categories";

const { data: categories, isLoading } = useCategoriesQuery()
</script>

<template>
  <header class="border-b space-y-2 pb-3 mb-6" >
    <div class="h-16 flex justify-between items-center px-4 space-x-6">
      <NuxtLink to="/" class="h-full flex items-center">
        <img src="/logo.png" alt="лого">
      </NuxtLink>
<!--      TODO: добавить спиннер -->
      <DropdownMenu v-if="!isLoading">
        <DropdownMenuTrigger>
          <Button>
            Каталог
            <MenuIcon/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Категории товаров</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem v-for="category in categories">
            <NuxtLink :to="category.url">
              {{ category.display }}
            </NuxtLink>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
      <Input placeholder="Найти товары"/>

      <Button variant="ghost">
        <HeartIcon/>
      </Button>
      <Button variant="ghost" class="!ml-0">
        <ShoppingBasketIcon/>
      </Button>

      <ThemeSwitcher/>
      <UserMenu/>

    </div>

    <Subheader />
  </header>
</template>