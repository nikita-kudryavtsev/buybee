<script setup lang="ts">

import Header from "~/components/app/header/Header.vue";
</script>

<template>
  <div class="h-[100vh] py-5 w-[1400px] m-auto ">
    <Header/>
    <slot/>
  </div>
</template>

<style scoped>
</style>