import { toast, useToast } from "~/components/ui/toast";

export default function useAuth() {
  const user = useState('user', () => null)
  const { toast } = useToast()
  const router = useRouter()
  // const fetchUser = async () => {
  //   try {
  //     const data = await $fetch('/api/auth/me')
  //     console.log({data})
  //     user.value = data
  //   } catch (error) {
  //     user.value = null
  //   }
  // }
  const getUser = () => {
    httpClient('/api/user/get-user', {
    }).then((response) => {
      console.log({response})
    })
      // .catch((error) => {
      //   userStore.setUserData(null)
      //   if (to.path.includes('/user')) {
      //     toast({
      //       title: 'Ошибка авторизации!',
      //       description: error.data.message,
      //       variant: 'destructive'
      //     })
      //     router.push('/')
      //   }
      // })
  }

  const login = async ({ login, password }: { login: string, password: string}) => {
    await $fetch<{ success: boolean }>('api/auth/log-in', {
      method: 'POST',
      body: { login, password }
    }).then((response) => {
      // console.log({res: response})
      if (response.success) {
        user.value = response.success
        router.push('/')
      }
    }).catch((error) => {
      toast({
        title: 'Ошибка входа!',
        description: error.data.message,
        variant: 'destructive'
      })
    })
  }


  return {
    user,
    login,
    getUser,
// fetchUser
  }
}