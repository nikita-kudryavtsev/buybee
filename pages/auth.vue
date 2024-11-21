<script setup lang="ts">
import LoginForm from "~/components/auth/LoginForm.vue";
import RegistrationForm from "~/components/auth/RegistrationForm.vue";

definePageMeta({
  layout: 'auth',
  title: 'Login',
})

type form_type = 'login' | 'registration'

const formType = ref<form_type>('login')

const toggleFormType = () => formType.value === 'login' ? formType.value = 'registration' : formType.value = 'login'

const formComponent = computed(() => formType.value === 'login' ? LoginForm : RegistrationForm)
</script>

<template>
  <Button variant="ghost" class="absolute right-2 top-2" @click="toggleFormType">
    {{ formType === 'login' ? 'Зарегестрироваться' : 'Войти' }}
  </Button>
  <div class="w-[360px] space-y-[100px] ">
    <component :is="formComponent"/>
  </div>
</template>