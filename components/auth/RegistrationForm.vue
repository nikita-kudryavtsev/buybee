<script setup lang="ts">
import AuthFormConstructor from "~/components/auth/AuthFormConstructor.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { useToast } from "~/components/ui/toast";
import { userRegisterSchema } from "~/validation-schemas/user/registerSchema";

const { toast } = useToast()

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(userRegisterSchema)
})

const onSubmit = handleSubmit(async ({ login, password, firstName, lastName }) => {
  await $fetch<{ message: string }>('api/auth/registration', {
    method: 'POST',
    body: { login, password, firstName, lastName }
  }).then(response => {
    toast({
      title: 'Успешно!',
      description: response.message,
      variant: 'success',
    })
  }).catch(error => {
    toast({
      title: 'Ошибка при создании пользователя!',
      description: error.data.message,
      variant: 'destructive'
    })
  })
})

const formData = {
  title: 'Регистрация',
  subtitle: 'Введите данные для создания пользователя',
  fields: [
    { key: 'firstName', display: 'Имя', type: 'string' },
    { key: 'lastName', display: 'Фамилия', type: 'string' },
    { key: 'login', display: 'Логин', type: 'string' },
    { key: 'password', display: 'Пароль', type: 'password' },
  ],
  submitText: 'Зарегестироваться',
  submitAction: onSubmit,
}

</script>

<template>
  <AuthFormConstructor :data="formData"/>
</template>