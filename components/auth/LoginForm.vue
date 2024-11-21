<script setup lang="ts">
import FormConstructor from "~/components/auth/AuthFormConstructor.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { useToast } from "~/components/ui/toast";
import { userLoginSchema } from "~/validation-schemas/user/loginSchema";

const router = useRouter()
const { toast } = useToast()

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(userLoginSchema)
})

const onSubmit = handleSubmit(async ({ login, password }) => {
  await $fetch<{ success: boolean }>('api/auth/log-in', {
    method: 'POST',
    body: { login, password }
  }).then((response) => {
    response.success && router.push('/')
  } ).catch((error) => {
    toast({
      title: 'Ошибка при создании пользователя!',
      description: error.data.message,
      variant: 'destructive'
    })
  })
})

const formData = {
  title: 'Войти',
  subtitle: 'Введите данные для входа в аккаунт',
  fields: [
    { key: 'login', display: 'Логин', type: 'string' },
    { key: 'password', display: 'Пароль', type: 'password' },
  ],
  submitText: 'Войти',
  submitAction: onSubmit,
}

</script>

<template>
  <FormConstructor :data="formData"/>
</template>