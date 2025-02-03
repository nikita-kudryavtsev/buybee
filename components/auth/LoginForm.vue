<script setup lang="ts">
import AuthFormConstructor from "~/components/auth/AuthFormConstructor.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { userLoginSchema } from "~/validation-schemas/user/loginSchema";
import useAuth from "~/composables/useAuth";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(userLoginSchema)
})

const { login } = useAuth()

const formData = {
  title: 'Войти',
  subtitle: 'Введите данные для входа в аккаунт',
  fields: [
    { key: 'login', display: 'Логин', type: 'string' },
    { key: 'password', display: 'Пароль', type: 'password' },
  ],
  submitText: 'Войти',
  submitAction: handleSubmit(login),
}

</script>

<template>
  <AuthFormConstructor :data="formData"/>
</template>