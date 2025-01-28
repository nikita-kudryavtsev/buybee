<script setup lang="ts">
import { Input } from "~/components/ui/input";
import { toTypedSchema } from "@vee-validate/zod";
import { Textarea } from "~/components/ui/textarea";
import { useForm } from "vee-validate";
import { toast } from "~/components/ui/toast";
import AppSelect from "~/components/ui/customs/AppSelect.vue";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { useRolesQuery } from "~/queries/roles";
import { editUserSchema } from "~/validation-schemas/user/editSchema";

const userStore = useUserStore()

const { data: roleList } = useRolesQuery()

const setUserData = () => {
  return httpClient('/api/user/get-user').then(response => userStore.setUserData(response))
}

onMounted(async () => {
  if (!userStore.userData) await setUserData()
  setValues(userStore.userData)
})

const { handleSubmit, setValues} = useForm({
  validationSchema: toTypedSchema(editUserSchema),
})

const onSubmit = handleSubmit(async (values) => {
  httpClient('/api/user/edit', {
    method: 'POST',
    body: values,
  }).then(response => {
    toast({
      title: 'Успешно!',
      description: response.message,
      variant: 'success'
    })
  }).catch((error) => {
    console.error(error)
  })
})

const onReset = () => setValues(userStore.userData)
</script>

<template>
  <Avatar size="lg">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  <form @submit="onSubmit" class="space-y-3">
    <FormField v-slot="{ componentField }" name="firstName">
      <FormItem>
        <FormLabel> Имя </FormLabel>
        <FormControl>
          <Input v-bind="componentField" />
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="lastName">
      <FormItem>
        <FormLabel> Фамилия </FormLabel>
        <FormControl>
          <Input v-bind="componentField" />
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="login">
      <FormItem>
        <FormLabel> Логин </FormLabel>
        <FormControl>
          <Input v-bind="componentField" />
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="roleId">
      <FormItem>
        <FormLabel> Роль </FormLabel>
        <FormControl>
          <AppSelect v-bind="componentField" :items="roleList"/>
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="bio">
      <FormItem>
        <FormLabel> Био </FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" />
        </FormControl>
        <FormDescription>
          Напишите что-нибудь
        </FormDescription>
        <FormMessage/>
      </FormItem>
    </FormField>

    <div class="flex gap-4">
      <Button type="submit">
        Применить
      </Button>
      <Button variant="outline" @click.prevent="onReset">
        Сбросить
      </Button>
    </div>
  </form>
</template>