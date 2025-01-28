<script setup lang="ts">

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

interface IFormConstructorField {
  key: string,
  display: string,
  type: 'string' | 'password'
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

</script>

<template>
  <div class="w-[360px]">
    <form @submit.prevent="data.submitAction" class="space-y-3">
      <div class="text-center space-y-3">
        <h2 class="text-xl font-medium">{{ data.title }}</h2>
        <div class="text-[#71717A]"> {{ data.subtitle }} </div>
      </div>

      <FormField v-for="field in data.fields" v-slot="{ componentField }" :name="field.key">
        <FormItem>
          <FormLabel>{{ field.display }} </FormLabel>
          <FormControl>
            <Input :type="field.type" v-bind="componentField"/>
          </FormControl>

          <FormMessage/>
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        {{ data.submitText }}
      </Button>
    </form>
  </div>
</template>