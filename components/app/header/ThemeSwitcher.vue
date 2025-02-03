<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";

const colorMode = useColorMode();

const changeColorMode = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <Button variant="ghost" @click="changeColorMode" class="!m-1">
    <Moon v-if="colorMode.value === 'light'" />
    <Sun v-else />
  </Button>
</template>
