<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from '@vee-validate/zod'

import * as z from 'zod'
import { Input } from "~/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

definePageMeta({
  layout: 'auth',
})

type form_type = 'login' | 'register'

interface IAuthParams {
  login: string,
  password: string,
}

const router = useRouter()
const formType = ref<form_type>('login')
const isLogInForm = computed(() => formType.value === 'login')

const authFormSchema = toTypedSchema(
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
  validationSchema: authFormSchema
})

const onSubmit = handleSubmit((values) => {
  formData.value.action(values)
})

const formData = computed(() => {
  return {
    title: isLogInForm.value ? 'Войти' : 'Регистрация',
    subTitle: `Введите данные для ${isLogInForm.value ? 'входа в аккаунт' : 'регистрации'}`,
    action: !isLogInForm.value ? onLogIn : onRegister,
  }
})

const onLogIn = ({ login, password }: IAuthParams) => {
  console.log({login, password})
  // router.push('/')
}

const onRegister = ({ login, password } : IAuthParams) => {
  console.log({login, password})
  formType.value = 'login'
}

const toggleFormType = () => isLogInForm.value ? formType.value = 'register' : formType.value = 'login'

</script>

<template>
  <Button variant="ghost" class="absolute right-2 top-2" @click="toggleFormType">
    {{ formType === 'login' ? 'Зарегестироваться' : 'Войти' }}
  </Button>
  <div class="w-[360px] space-y-[100px] ">
    <form @submit="onSubmit" class="space-y-3">
      <div class="text-center space-y-3">
        <h2 class="text-xl font-medium">{{ formData.title }}</h2>
        <div class="text-[#71717A]"> {{ formData.subTitle }} </div>
      </div>
      <FormField v-slot="{ componentField }" name="login">
        <FormItem>
          <FormLabel>Логин</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField"/>
          </FormControl>

          <FormMessage/>
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Пароль</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField"/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        Войти
      </Button>
    </form>
  </div>
</template>