<script setup lang="ts">
import FormConstructor from "~/components/construstors/FormConstructor.vue";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";

const registrationFormSchema = toTypedSchema(
    z.object({
      login: z.string({
        required_error: "Поле обязательно для ввода",
      }),
      firstName: z.string({
        required_error: "Поле обязательно для ввода",
      }),
      lastName: z.string({
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

const onSubmit = handleSubmit(async ({ login, password, firstName, lastName }) => {
  const { data, error } = await useFetch('api/user/registration', {
    method: 'POST',
    body: { login, password, firstName, lastName }
  })
  if (error.value) {
    console.log(error.value?.data.statusMessage)
    return
  }
  if (data.value) {
    console.log('data', data.value)
  }
  // formsData.value.action(values)
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
  <FormConstructor :data="formData"/>
</template>