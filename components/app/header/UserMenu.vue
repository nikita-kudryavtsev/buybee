<script setup lang="ts">

import { Avatar } from "~/components/ui/avatar";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { SettingsIcon, HeartIcon, ScissorsIcon, LogOutIcon, MailIcon} from "lucide-vue-next";

const router = useRouter()

const menuItems = [
  { label: 'Промокоды', to: '/profile/promocodes', icon: ScissorsIcon },
  { label: 'Избранное', to: '/profile/favorites', icon: HeartIcon },
  { label: 'Настройки', to: '/profile/settings', icon: SettingsIcon },
  { label: 'Сообщения', to: '/profile/messages', icon: MailIcon },
]

const onLogout = () => {
  router.push('/auth')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-8 w-8">
          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            Имя пользователя
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            m@example.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>

        <NuxtLink v-for="item in menuItems" :key="item.to" :to="item.to">
          <DropdownMenuItem>
            <component :is="item.icon"/>
            {{ item.label }}
          </DropdownMenuItem>

        </NuxtLink>

      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="onLogout">
        <LogOutIcon/>
        Выйти
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>