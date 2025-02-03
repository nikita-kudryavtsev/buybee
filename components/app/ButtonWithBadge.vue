<script setup lang="ts">
const props = defineProps<{ badgeValue: number }>()
</script>

<template>
<Button variant="ghost" class="!m-0">
  <div class="relative">
    <slot name="icon"/>
    <span
        v-if="badgeValue"
        class="absolute bottom-[-50%] right-[-50%] text-xs py-1 px-2 rounded-full bg-red-100 h-fit w-fit"
    >{{ badgeValue }}</span>
  </div>
</Button>
</template>