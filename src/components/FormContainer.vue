<script setup lang="ts">
interface FormContainerProps {
  title: string
}

defineProps<FormContainerProps>()
</script>

<template>
  <section
      class="flex flex-col py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
    <div class="sm:col-span-12">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        {{ title }}
      </h2>
    </div>

    <slot/>
  </section>
</template>

<style scoped>

</style>