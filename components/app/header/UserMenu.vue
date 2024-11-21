<script setup lang="ts">
import { Avatar } from "~/components/ui/avatar";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { SettingsIcon, HeartIcon, ScissorsIcon, LogOutIcon, MailIcon} from "lucide-vue-next";

const router = useRouter()

const { userData } = storeToRefs(useUserStore())

const menuItems = [
  { label: 'Промокоды', to: '/user/promocodes', icon: ScissorsIcon },
  { label: 'Избранное', to: '/user/favorites', icon: HeartIcon },
  { label: 'Настройки', to: '/user/settings', icon: SettingsIcon },
  { label: 'Сообщения', to: '/user/messages', icon: MailIcon },
]

const onLogout = () => {
  router.push('/auth')
}


</script>

<template>

  <Button v-if="!userData">Войти</Button>
  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback />
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            {{ userData.firstName }} {{ userData.lastName }}
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            Описание
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