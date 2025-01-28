<script setup lang="ts">
import { Separator } from "radix-vue";
import { HeartIcon, MailIcon, ScissorsIcon, SettingsIcon } from "lucide-vue-next";
import { cn } from "~/lib/utils/utils";

definePageMeta({
  middleware: 'auth'
})
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
    <Separator/>

    <div class="flex w-full gap-6">
      <nav class="w-60 pt-6 flex flex-col">
        <NuxtLink v-for="tab in tabs" :to="`${tab.href}`">
          <Button
              variant="ghost"
              class="w-full hover:bg-muted text-left justify-start gap-4"
              :class="cn('w-full hover:bg-muted text-left justify-start gap-4', route.path === `${tab.href}` && 'bg-muted hover:bg-muted')"
          >
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