<script setup lang="ts">
import { Avatar } from "~/components/ui/avatar";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { SettingsIcon, ScissorsIcon, LogOutIcon, MailIcon} from "lucide-vue-next";
import type { IPublicUserData } from "~/types/user";

const router = useRouter()

const userData = useState<IPublicUserData | null>('user')

const menuItems = [
  { label: 'Промокоды', to: '/user/promocodes', icon: ScissorsIcon },
  { label: 'Профиль', to: '/user/settings', icon: SettingsIcon },
  { label: 'Сообщения', to: '/user/messages', icon: MailIcon },
]

const onLogout = () => {
  $fetch('api/auth/logout', { method: 'post'});
  userData.value = null
}

const goToAuthPage = () => router.push('/auth')
</script>

<template>
  <Button v-if="!userData" @click="goToAuthPage" >Войти</Button>
  <DropdownMenu v-else>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar>
<!--          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />-->
          <AvatarImage :src="userData.profilePhoto ? userData.profilePhoto : 'https://github.com/shadcn.png'" alt="photo" />
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
          <DropdownMenuItem class="hover:cursor-pointer">
            <component :is="item.icon"/>
            {{ item.label }}
          </DropdownMenuItem>
        </NuxtLink>

      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="onLogout" class="hover:cursor-pointer">
        <LogOutIcon/>
        Выйти
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>