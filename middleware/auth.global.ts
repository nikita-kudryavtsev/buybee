import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to) => {
  const { fetchWithAuth } = useApi()
  const userStore = useUserStore()
  const router = useRouter()

  fetchWithAuth('/api/user/get-user', {
  }).then((response) => response && userStore.setUserData(response)).then(() => navigateTo(to))
    .catch((error) => {
    userStore.setUserData(null)
    if (to.path.includes('/user')) {
      router.push('/')
    }
  })
})
