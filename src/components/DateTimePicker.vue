<script setup lang="ts">
import {ref, computed, watch, onMounted, onBeforeUnmount, reactive} from 'vue'
import dayjs from "dayjs";

const props = defineProps({
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  minDate: {
    type: Date,
    default: () => new Date(1900, 0, 1),
  },
  maxDate: {
    type: Date,
    default: () => new Date(2100, 11, 31),
  },
})

const date = defineModel<Date | undefined>('date', {required: true})
const time = defineModel<{ hour: number | undefined, minute: number | undefined } | undefined>('time', {required: true})

const currentMonth = ref<number>(date.value?.getMonth() ?? (new Date()).getMonth())
const currentYear = ref<number>(date.value?.getFullYear() ?? (new Date()).getFullYear())
const tempSelectedDate = ref<Date | undefined>(date.value ? new Date(date.value) : undefined)
const tempSelectedTime = reactive<{ hour: number | undefined, minute: number | undefined }>({
  hour: undefined,
  minute: undefined
})

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const daysShort = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function daysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate()
}

function firstDayOfMonth(month: number, year: number) {
  return (new Date(year, month, 1).getDay() + 6) % 7
}

const calendarDays = computed(() => {
  const totalDays = daysInMonth(currentMonth.value, currentYear.value)
  const firstDay = firstDayOfMonth(currentMonth.value, currentYear.value)
  const days: { date: Date; disabled: boolean }[] = []

  for (let i = 0; i < firstDay; i++) {
    days.push({date: new Date(currentYear.value, currentMonth.value, i - firstDay + 1), disabled: true})
  }

  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(currentYear.value, currentMonth.value, d)
    const disabled = date < props.minDate || date > props.maxDate
    days.push({date, disabled})
  }

  while (days.length % 7 !== 0) {
    const last = days[days.length - 1]!.date
    days.push({date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1), disabled: true})
  }

  return days
})

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else currentMonth.value++
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else currentMonth.value--
}

function selectDate(day: { date: Date; disabled: boolean }) {
  if (!day.disabled) tempSelectedDate.value = day.date
}

watch(
    () => date.value,
    (val) => {
      if (!val) return
      currentMonth.value = val.getMonth()
      currentYear.value = val.getFullYear()
      tempSelectedDate.value = new Date(val)
    }
)

const showDatePicker = ref<boolean>(false)
const showTimePicker = ref<boolean>(false)

const wrapper = ref<any>(null)

const handleClickOutside = (event: any) => {
  if (wrapper.value && !wrapper.value.contains(event.target)) {
    showDatePicker.value = false
    showTimePicker.value = false
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
  <div ref="wrapper" class="relative inline-block w-full">
    <div class="sm:flex">
      <input type="text" placeholder="Date"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
             readonly
             :value="date ? dayjs(date).format(dateFormat) : undefined"
             @focus="showDatePicker = true"
      >
      <input type="text" placeholder="Time"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
             :value="time?.hour !== undefined && time?.minute !== undefined ?  `${String(time.hour).padStart(2, '0')} :  ${String(time.minute).padStart(2, '0')}` : ''"
             @focus="showTimePicker = true">
    </div>
    <div v-if="showDatePicker" class="absolute z-50 mt-2">
      <div
          class="w-80 flex flex-col bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700"
      >
        <div class="p-3 space-y-0.5">
          <div class="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
            <div class="col-span-1">
              <button
                  type="button"
                  @click="prevMonth"
                  class="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
            </div>

            <div class="col-span-3 flex justify-center items-center gap-x-1">
          <span class="font-medium text-gray-800 dark:text-neutral-200">
            {{ months[currentMonth] }}
          </span>
              <span class="text-gray-800 dark:text-neutral-200">/</span>
              <span class="font-medium text-gray-800 dark:text-neutral-200">
            {{ currentYear }}
          </span>
            </div>

            <div class="col-span-1 flex justify-end">
              <button
                  type="button"
                  @click="nextMonth"
                  class="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full dark:text-neutral-400 dark:hover:bg-neutral-800"
              >
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex pb-1.5">
        <span
            v-for="day in daysShort"
            :key="day"
            class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500"
        >
          {{ day }}
        </span>
          </div>

          <div
              v-for="(_, i) in Math.ceil(calendarDays.length / 7)"
              :key="i"
              class="flex"
          >
            <div v-for="(day, j) in calendarDays.slice(i * 7, i * 7 + 7)" :key="j">
              <button
                  type="button"
                  @click="selectDate(day)"
                  :disabled="day.disabled"
                  class="m-px size-10 flex justify-center items-center text-sm rounded-full transition-colors"
                  :class="[
              day.disabled
                ? 'text-gray-400 cursor-not-allowed opacity-50'
                : day.date.toDateString() === tempSelectedDate?.toDateString()
                ? 'bg-blue-600 text-white font-medium'
                : 'text-gray-800 hover:border-blue-600 hover:text-blue-600 dark:text-neutral-200 dark:hover:border-blue-500 dark:hover:text-blue-500',
                day.date.toDateString() === (new Date()).toDateString() ? 'border-[1.5px]' : ''
            ]"
              >
                {{ day.date.getDate() }}
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 dark:border-neutral-700 flex justify-end gap-2 p-3">
          <button
              type="button"
              @click="date = tempSelectedDate; showDatePicker = false"
              class="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>


    <div v-if="showTimePicker" class="absolute z-50 mt-2 right-0">
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
        </div>
        <div class="border-t border-gray-200 dark:border-neutral-700 flex justify-end gap-2 p-3">

          <button
              type="button"
              @click="time = {...tempSelectedTime}; showTimePicker = false"
              class="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
