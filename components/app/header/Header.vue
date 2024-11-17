<script setup lang="ts">
import UserMenu from "~/components/app/header/UserMenu.vue";
import ThemeSwitcher from "~/components/app/header/ThemeSwitcher.vue";
import {ShoppingBasketIcon, HeartIcon} from "lucide-vue-next";
import Subheader from "~/components/app/header/Subheader.vue";
</script>

<template>
  <header class="border-b space-y-2 pb-3" >
    <div class="h-16 flex justify-between items-center px-4 space-x-6">

      <div class="bg-blue-50 text-nowrap px-2 flex">Какой-то логотип</div>
      <Button> Каталог </Button>
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


<!--    <TooltipProvider>-->
<!--      <Tooltip>-->
<!--        <TooltipTrigger>-->
<!--        <Button variant="ghost">-->
<!--          <HeartIcon/>-->
<!--        </Button>-->
<!--        </TooltipTrigger>-->
<!--        <TooltipContent>-->
<!--          <p>Избранное</p>-->
<!--        </TooltipContent>-->
<!--      </Tooltip>-->
<!--    </TooltipProvider>-->

<!--    <TooltipProvider>-->
<!--      <Tooltip>-->
<!--        <TooltipTrigger>-->
<!--          <Button variant="ghost" class="!ml-0">-->
<!--            <ShoppingBasketIcon/>-->
<!--          </Button>-->
<!--        </TooltipTrigger>-->
<!--        <TooltipContent>-->
<!--          <p>Корзина</p>-->
<!--        </TooltipContent>-->
<!--      </Tooltip>-->
<!--    </TooltipProvider>-->
<style scoped>
</style>