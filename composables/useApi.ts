import { useToast } from "~/components/ui/toast";

export const useApi = () => {
  const fetchWithAuth = async (url: string, options = {}) => {
    const refreshToken = useCookie('refreshToken')
    const router = useRouter()
    const { toast } = useToast()

    return $fetch<any>(url, options).then((response) => response).catch((error) => {
      if (error.data.statusCode === 401 && refreshToken) {
        $fetch('/api/token/refresh-token', { method: 'POST' })
          .then(() => $fetch(url, options).then((response) => response))
          .catch((error) => {
            router.push('/auth')
            toast({
              title: 'Ошибка при создании пользователя!',
              description: 'hii',
              variant: 'destructive'
            })
          })
      }
    })
  }

  const defaultFetch = (url: string, options = {}) => {
    return $fetch(url, options)
  }

  return {
    fetchWithAuth,
    defaultFetch,
  }
}