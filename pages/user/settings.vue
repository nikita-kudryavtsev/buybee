<script setup lang="ts">
import FormConstructor from "~/components/app/FormConstructor.vue";
import { Input } from "~/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Textarea } from "~/components/ui/textarea";
import { useForm } from "vee-validate";

const { fetchWithAuth } = useApi()

const userStore = useUserStore()

const setUserData = () => {
  return fetchWithAuth('/api/user/get-user').then(response => useUserStore(s))
}

onMounted(async () => {
  if (!userStore.userData) await setUserData()
  setValues(userStore.userData)
})

const fieldsSchema = toTypedSchema(
    z.object({
      firstName: z.string({
        required_error: "Поле обязательно для ввода",
      }).min(1, { message: "Поле обязательно для ввода" }),
      lastName: z
          .string().min(1, { message: "Поле обязательно для ввода" }),
      login: z
          .string().min(1, { message: "Поле обязательно для ввода" }),
    })
);

const { handleSubmit, setValues} = useForm({
  validationSchema: fieldsSchema,
})

const onSubmit = handleSubmit(async (values) => {
  const token = localStorage.getItem('accessToken')
  await $fetch('/api/user/edit', {
    method: 'POST',
    body: values,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.error(error)
  })
})

const onReset = () => setValues(userStore.userData)
const formData = {
  title: 'Профиль',
  fields: [
    { key: 'firstName', display: 'Имя', type: 'string', description: '', component: Input },
    { key: 'lastName', display: 'Фамилия', type: 'string', description: '', component: Input },
    { key: 'login', display: 'Логин', type: 'string', description: '', component: Input },
    { key: 'bio', display: 'О себе', type: 'string', description: 'Напишите что-нибудь', component: Textarea },
  ],
  submitText: 'Применить',
  submitAction: onSubmit,
}
</script>

<template>
  <Avatar size="lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <FormConstructor :data="formData" >
    <template #submit>
      <div class="flex gap-4">
        <Button type="submit">
          Применить
        </Button>
        <Button variant="outline" @click.prevent="onReset">
          Сбросить
        </Button>
      </div>
    </template>
  </FormConstructor>
</template>