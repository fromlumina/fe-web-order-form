<script setup lang="ts">

interface InputContainerProps {
  label: string;
  required: boolean;
  errorMessage?: string;
}

defineProps<InputContainerProps>()

</script>

<template>
  <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 mb-4">
    <div class="sm:col-span-3">
      <label for="af-submit-application-full-name"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        {{ label }}<span v-if="required" class="text-xs text-red-600">*</span>
      </label>
    </div>

    <div class="sm:col-span-9">
      <div class="flex flex-col">
        <div class="sm:flex">
          <slot/>
        </div>
        <p v-if="errorMessage" class="text-xs text-red-600">{{
            errorMessage
          }}</p>
      </div>
    </div>
  </div>
</template>