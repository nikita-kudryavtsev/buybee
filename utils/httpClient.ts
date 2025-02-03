import { useToast } from "~/components/ui/toast";

export default async function (url: string, options = {}) {
  const router = useRouter()
  const { toast } = useToast()

  return $fetch<any>(url, options).then((response) => response).catch((error) => {
    // if (error.data.statusCode === 401) {
    console.log(error.data.message)
    if (error.data.message === 'Invalid token') {
      $fetch('/api/token/refresh-token', { method: 'POST' })
        .then(() => $fetch(url, options).then((response) => response))
        .catch((error) => {
          console.error(error)
          // router.push('/auth')
          // toast({
          //   title: 'Ошибка при обновлении токена',
          //   description: error.data.message,
          //   variant: 'destructive'
          // })
        })
    }
  })
  // return $fetch<any>(url, options).then((response) => response).catch((error) => {
  //   if (error.data.statusCode === 401) {
  //     $fetch('/api/token/refresh-token', { method: 'POST' })
  //       .then(() => $fetch(url, options).then((response) => response))
  //       .catch((error) => {
  //         router.push('/auth')
  //         toast({
  //           title: 'Ошибка при обновлении токена',
  //           description: error.data.message,
  //           variant: 'destructive'
  //         })
  //       })
  //   }
  // })
}