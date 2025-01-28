import { defineNuxtRouteMiddleware } from "#app";
import { toast } from "~/components/ui/toast";

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  const router = useRouter()

  httpClient('/api/user/get-user', {
  }).then((response) => response && userStore.setUserData(response)).then(() => router.push(to))
    .catch((error) => {
    userStore.setUserData(null)
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
