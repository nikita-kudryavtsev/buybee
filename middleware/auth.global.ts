import { defineNuxtRouteMiddleware } from "#app";
import { toast } from "~/components/ui/toast";
import type { IPublicUserData } from "~/types/user";

export default defineNuxtRouteMiddleware((to) => {
  const userData = useState<IPublicUserData | null>('user', () => null)
  const router = useRouter()
  httpClient('/api/user/get-user').then((response) => {
    if (response) userData.value = response
  }).then(() => router.push(to))
    .catch((error) => {
      userData.value = null
      if (to.path.includes('/user')) {
        toast({
          title: 'Ошибка авторизации!',
          description: error.data.message,
          variant: 'destructive'
        })
        router.push('/')
      }
    })
})
