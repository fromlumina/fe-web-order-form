<script setup lang="ts">
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
import type {InputTimeType} from "../interfaces/form-builder.interface.ts";

interface InputTimeProps {
  variant: InputTimeType
  invalid: boolean
  className?: string
  placeholder?: string
  maxTime?: {
    hour: number
    minute: number
  }
  minTime?: {
    hour: number
    minute: number
  }
}

defineProps<InputTimeProps>()

const popupVisible = ref<boolean>(false)
const wrapper = ref<any>(null)

interface TimeProps {
  hour: number | undefined,
  minute: number | undefined,
  ampm: string | undefined
}

const tempSelectedTime = reactive<TimeProps>({
  hour: undefined,
  minute: undefined,
  ampm: undefined,
})
const value = defineModel<TimeProps | undefined>({required: true})

const handleClickOutside = (event: any) => {
  if (wrapper.value && !wrapper.value.contains(event.target)) {
    popupVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
  <div ref="wrapper" class="group w-full">
    <input
        :class="['py-1.5 sm:py-2 px-3 block w-full shadow-2xs -mt-px -ms-px group-first:group-last:rounded-lg group-first:rounded-t-lg group-last:rounded-b-lg sm:group-first:rounded-s-lg sm:mt-0 sm:group-first:ms-0 sm:group-first:rounded-se-none sm:group-last:rounded-es-none sm:group-last:rounded-e-lg sm:text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none', invalid ? 'bg-red-400/20 border-red-600 focus:border-red-600 focus:ring-red-600 dark:bg-red-400/80 dark:border-red-400 dark:focus:ring-red-400 dark:border:ring-red-400' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-600 dark:border:ring-neutral-600', className]"
        :value="value?.hour !== undefined && value?.minute !== undefined ? `${String(value.hour).padStart(2, '0')} : ${String(value.minute).padStart(2, '0')} ${value.ampm ?? ''}` : ''"
        readonly
        :placeholder
        @focus="popupVisible = true">
    <div v-if="popupVisible" class="absolute z-50 mt-2">
      <div
          class="hs-dropdown-menu transition-[opacity,margin] duration min-w-30 bg-white border border-gray-200 shadow-xl rounded-lg mt-2dark:bg-neutral-800 dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full">
        <div class="flex flex-row divide-x divide-gray-200 dark:divide-neutral-700">
          <div
              class="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <label
                v-for="hour in 24"
                :key="hour"
                :for="`hs-cbchlhh${String(hour-1).padStart(2, '0')}`"
                class="group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200
             has-checked:text-white dark:has-checked:text-white
             has-checked:bg-blue-600 dark:has-checked:bg-blue-500
             has-disabled:pointer-events-none
             has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
             has-disabled:after:absolute
             has-disabled:after:inset-0
             has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
             dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)]"
            >
              <input
                  type="radio"
                  :id="`hs-cbchlhh${String(hour-1).padStart(2, '0')}`"
                  class="hidden bg-transparent border-gray-200 text-blue-600 focus:ring-white focus:ring-offset-0 dark:text-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-900"
                  name="hs-cbchlhh"
                  @change="tempSelectedTime.hour = hour-1"
              />
              <span class="block">{{ String(hour - 1).padStart(2, '0') }}</span>
            </label>
          </div>
          <div
              class="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <label
                v-for="minute in 60"
                :key="minute"
                :for="`hs-cbchlmm${String(minute-1).padStart(2, '0')}`"
                class="group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200
             has-checked:text-white dark:has-checked:text-white
             has-checked:bg-blue-600 dark:has-checked:bg-blue-500
             has-disabled:pointer-events-none
             has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
             has-disabled:after:absolute
             has-disabled:after:inset-0
             has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
             dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)]"
            >
              <input
                  type="radio"
                  :id="`hs-cbchlmm${String(minute-1).padStart(2, '0')}`"
                  class="hidden bg-transparent border-gray-200 text-blue-600 focus:ring-white focus:ring-offset-0 dark:text-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-900"
                  name="hs-cbchlmm"
                  @change="tempSelectedTime.minute = minute-1"
              />
              <span class="block">{{ String(minute - 1).padStart(2, '0') }}</span>
            </label>
          </div>

          <div v-if="variant === '12h'"
              class="p-1 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <label
                v-for="ampm in ['AM', 'PM']"
                :key="ampm"
                :for="`hs-cbchlmm-${ampm}`"
                class="group relative flex justify-center items-center p-1.5 w-10 text-center text-sm text-gray-800 cursor-pointer rounded-md hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-200
             has-checked:text-white dark:has-checked:text-white
             has-checked:bg-blue-600 dark:has-checked:bg-blue-500
             has-disabled:pointer-events-none
             has-disabled:text-gray-200 dark:has-disabled:text-neutral-700
             has-disabled:after:absolute
             has-disabled:after:inset-0
             has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-gray-200)_calc(50%-1px),var(--color-gray-200)_50%,transparent_50%)]
             dark:has-disabled:after:bg-[linear-gradient(to_right_bottom,transparent_calc(50%-1px),var(--color-neutral-700)_calc(50%-1px),var(--color-neutral-700)_50%,transparent_50%)]"
            >
              <input
                  type="radio"
                  :id="`hs-cbchlmm-${ampm}`"
                  class="hidden bg-transparent border-gray-200 text-blue-600 focus:ring-white focus:ring-offset-0 dark:text-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-900"
                  name="hs-cbchlmm"
                  @change="tempSelectedTime.ampm = ampm"
              />
              <span class="block">{{ ampm }}</span>
            </label>
          </div>
        </div>
        <div class="border-t border-gray-200 dark:border-neutral-700 flex justify-end gap-2 p-3">

          <button
              type="button"
              @click="value = {...tempSelectedTime}; popupVisible = false"
              class="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>

</template>