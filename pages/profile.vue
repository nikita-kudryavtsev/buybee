<script setup lang="ts">
import { Separator } from "radix-vue";
import { cn } from "~/lib/utils";
import { HeartIcon, MailIcon, ScissorsIcon, SettingsIcon } from "lucide-vue-next";
// import router from "#app/plugins/router";

const tabs = [
  { label: 'Промокоды', href: '/user/promocodes', icon: ScissorsIcon },
  { label: 'Избранное', href: '/user/favorites', icon: HeartIcon },
  { label: 'Профиль', href: '/user/settings', icon: SettingsIcon },
  { label: 'Сообщения', href: '/user/messages', icon: MailIcon },
];

const route = useRoute()

const selectedTab = computed(() => tabs.find(item => item.href === route.path))
</script>

<template>
  <div class="mx-auto my-8 w-fit">
<!--    <div class="pb-6">-->
<!--      <div class="text-2xl font-bold">Settings</div>-->
<!--      <span class="text-muted-foreground">-->
<!--        Manage your account settings and set e-mail preferences.-->
<!--      </span>-->
<!--    </div>-->
    <Separator/>

    <div class="flex w-full gap-6">
      <nav class="w-60 pt-6 flex flex-col">
        <NuxtLink v-for="tab in tabs" :to="`${tab.href}`">
          <Button
              variant="ghost"
              class="w-full hover:bg-muted text-left justify-start gap-4"
              :class="route.path === `${tab.href}` && 'bg-muted hover:bg-muted'"
          >
<!--            :class="-->
<!--            cn(-->
<!--            'w-full text-left justify-start',-->
<!--            $route.path === `${tab.href}` && 'bg-muted hover:bg-muted'-->
<!--            )-->
<!--            "-->
            <component :is="tab.icon"/>
            {{ tab.label }}
          </Button>
        </NuxtLink>
      </nav>
      <div class="w-[1100px] pt-6 space-y-3">
        <header v-if="selectedTab" class="text-xl">
          {{ selectedTab.label }}
        </header>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>