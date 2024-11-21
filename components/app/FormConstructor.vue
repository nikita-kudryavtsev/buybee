<script setup lang="ts">

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";

interface IFormConstructorField {
  key: string,
  display: string,
  type: 'string' | 'password'
  component: Component
  description: string
}

interface IFormConstructorData {
  title: string,
  subtitle: string,
  fields: IFormConstructorField[]
  submitText: string,
  submitAction: (e?: Event) => Promise<Promise<void> | undefined>
}

const props = defineProps<{
  data: IFormConstructorData
}>()

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <form @submit="data.submitAction" class="space-y-3" @update="() => console.log('uop')">
      <FormField v-for="field in data.fields" v-slot="{ componentField }" :name="field.key">
        <FormItem>
          <FormLabel>{{ field.display }} </FormLabel>
          <FormControl>
            <component :is="field.component" v-bind="componentField"/>
          </FormControl>
          <FormDescription>
            {{ field.description }}
          </FormDescription>
          <FormMessage/>
        </FormItem>
      </FormField>
      <slot name="submit"/>
    </form>
  </div>
</template>