<script setup lang="ts">
import type {InputTextType} from "../interfaces/form-builder.interface.ts";

interface InputTextProps {
  placeholder?: string
  invalid?: boolean
  variant: InputTextType
  className?: string
  maxLength?: number
}

defineProps<InputTextProps>()
const value = defineModel<string | undefined>({required: true})
</script>

<template>
  <input
      :class="['py-1.5 sm:py-2 px-3 block w-full shadow-2xs -mt-px -ms-px first:last:rounded-lg first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none', invalid ? 'bg-red-400/20 border-red-600 focus:border-red-600 focus:ring-red-600 dark:bg-red-400/80 dark:border-red-400 dark:focus:ring-red-400 dark:border:ring-red-400' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-600 dark:border:ring-neutral-600', className]"
      v-model="value"
      :maxlength="maxLength"
      :placeholder>
</template>

<style scoped>

</style>