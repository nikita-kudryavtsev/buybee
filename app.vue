<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>

<script setup lang="ts">
import { Toaster } from "~/components/ui/toast";
import useAuth from "~/composables/useAuth";
// const { fetchUser} = useAuth()
// onMounted(() => {
//   fetchUser()
//   console.log('mount')
// })
</script>