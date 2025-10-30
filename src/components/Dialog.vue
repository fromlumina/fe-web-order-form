<script setup lang="ts">
import {onUnmounted, watch} from "vue";

interface ModalProps {
  title: string
  visible: boolean
}

const props = defineProps<ModalProps>()
const emit = defineEmits(['close']);

watch(props, (newVal) => {
  if (newVal.visible) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}, {immediate: true})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="visible"
       class="backdrop-blur-xs bg-black/50 size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none">
    <div
        class="my-6 ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
      <div
          class="w-full max-h-full overflow-hidden flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
          <h3 class="font-bold text-gray-800 dark:text-white">
            {{ title }}
          </h3>
          <button type="button"
                  class="hover:cursor-pointer size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                  @click="emit('close')">
            <vue-feather type="x"/>
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <slot/>
        </div>
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>