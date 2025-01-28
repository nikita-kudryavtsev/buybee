<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
} from "~/components/ui/alert-dialog";

const open = defineModel({ default: false })
const emits = defineEmits(['apply', 'cancel'])

const props = withDefaults(defineProps<{
  title?: string,
  text?: string,
}>(), {
  title: 'Подтвердите действие'
})
</script>

<template>
  <AlertDialog v-model:open="open" @apply="() => console.log('true')" @cancel="() => console.log('false')" >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ title }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ text }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="emits('cancel')">Отменить</AlertDialogCancel>
        <AlertDialogAction @click="emits('apply')">Продолжить</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>