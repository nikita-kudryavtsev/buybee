<script setup lang="ts">
import FormConstructor from "~/components/construstors/FormConstructor.vue";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";

const router = useRouter()

const registrationFormSchema = toTypedSchema(
    z.object({
      login: z.string({
        required_error: "Поле обязательно для ввода",
      }),
      password: z
          .string()
          .min(6, {
            message: "Пароль должен быть не менее 6 символов",
          })
          .max(30, {
            message: "Максимальная длина пароля 30 символов",
          }),
    })
);

const { handleSubmit } = useForm({
  validationSchema: registrationFormSchema
})

const onSubmit = handleSubmit(async ({ login, password }) => {
  const { data, error } = await useFetch('api/user/log-in', {
    method: 'POST',
    body: { login, password }
  })
  if (error.value) {
    console.log(error.value?.data.statusMessage)
    return
  }
  if (data.value) {
    const { accessToken, refreshToken, userData } = data.value as any
    router.push('/')
  }
  // formsData.value.action(values)
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

<style scoped>

</style>