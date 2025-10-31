<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import type {InputDateType} from "../interfaces/form-builder.interface.ts";
import dayjs from "dayjs";

interface InputTimeProps {
  variant: InputDateType
  format: string
  invalid: boolean
  className?: string
  placeholder?: string
  maxDate?: Date
  minDate?: Date
}

type DateValueType = Date | Date[] | { start: Date, end: Date | undefined } | undefined

const props = defineProps<InputTimeProps>()

const popupVisible = ref<boolean>(false)
const wrapper = ref<any>(null)
const value = defineModel<DateValueType>({required: true})
const tempSelectedDate = ref<DateValueType>(value.value)

const getInitialDate = (): Date => {
  if (!value.value) return new Date();

  if (
      typeof value.value === 'object' &&
      'start' in value.value
  ) {
    return value.value.start
  }

  if (Array.isArray(value.value)) {
    return value.value.shift() ?? new Date()
  }

  if (value.value instanceof Date) {
    return value.value
  }

  return new Date()
};
const currentMonth = ref<number>(getInitialDate().getMonth())
const currentYear = ref<number>(getInitialDate().getFullYear())

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

const calendarDays = computed<{ date: Date; disabled: boolean }[]>(() => {
  const totalDays = daysInMonth(currentMonth.value, currentYear.value)
  const firstDay = firstDayOfMonth(currentMonth.value, currentYear.value)
  const days: { date: Date; disabled: boolean }[] = []

  for (let i = 0; i < firstDay; i++) {
    days.push({date: new Date(currentYear.value, currentMonth.value, i - firstDay + 1), disabled: true})
  }

  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(currentYear.value, currentMonth.value, d)
    const disabled = ((props.minDate && date < props.minDate) || (props.maxDate && date > props.maxDate)) ?? false
    days.push({date, disabled})
  }

  while (days.length % 7 !== 0) {
    const last = days[days.length - 1]!.date
    days.push({date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1), disabled: true})
  }

  return days
})

const nextMonth = (): void => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else currentMonth.value++
}

const prevMonth = (): void => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else currentMonth.value--
}

const selectDate = (day: { date: Date; disabled: boolean }): void => {
  if (day.disabled) return

  if (props.variant === 'single') {
    tempSelectedDate.value = day.date
    return
  }

  if (props.variant === 'multiple') {
    if (!Array.isArray(tempSelectedDate.value)) {
      tempSelectedDate.value = [];
    }
    if ((tempSelectedDate.value as Date[]).includes(day.date)) tempSelectedDate.value = (tempSelectedDate.value as Date[]).filter(x => x !== day.date)
    else (tempSelectedDate.value as Date[]).push(day.date)
    return
  }

  if (props.variant === 'range') {
    if (
        typeof tempSelectedDate.value === 'object' &&
        'start' in tempSelectedDate.value &&
        tempSelectedDate.value.start &&
        tempSelectedDate.value.start <= day.date
    ) {
      tempSelectedDate.value = {
        start: tempSelectedDate.value.start,
        end: day.date,
      }
    } else {
      tempSelectedDate.value = {
        start: day.date,
        end: undefined
      }
    }
  }
}

const handleClickOutside = (event: any): void => {
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

const label = computed<string | undefined>(() => {
  if (!value.value) return undefined
  if (props.variant === 'single') return dayjs(value.value as Date).format(props.format)
  if (props.variant === 'multiple') {
    const dates = value.value as Date[]
    return `${dates.length > 0 ? dates.length : 'Not'} Selected`
  }
  if (props.variant === 'range' && typeof value.value === 'object' && 'start' in value.value) {
    return `${dayjs(value.value.start).format(props.format)} - ${value.value.end ? dayjs(value.value.end).format(props.format) : ''}`
  }
  return undefined
})

const isSelected = (date: Date): boolean => {
  if (props.variant === 'single' && tempSelectedDate.value === date) return true
  if (props.variant === 'multiple' && (tempSelectedDate.value as Date[])?.includes(date)) return true
  return props.variant === 'range' && typeof tempSelectedDate.value === 'object' && 'start' in tempSelectedDate.value && ((date >= tempSelectedDate.value.start && date <= (tempSelectedDate.value.end ?? tempSelectedDate.value.start)) || tempSelectedDate.value.start === date);
}

const roundedDayClass = (date: Date): string => {
  if (props.variant === 'single' || props.variant === 'multiple') return 'rounded-full'
  if (props.variant === 'range' && typeof tempSelectedDate.value === 'object' && 'start' in tempSelectedDate.value) {
    if (date === tempSelectedDate.value.start && date === tempSelectedDate.value.end) return 'rounded-full'
    if (tempSelectedDate.value.start === date) return 'rounded-l-full'
    if (tempSelectedDate.value.end === date) return 'rounded-r-full'
  }
  return ''

}
</script>

<template>
  <div ref="wrapper" class="group w-full">
    <input
        :class="['py-1.5 sm:py-2 px-3 block w-full shadow-2xs -mt-px -ms-px group-first:group-last:rounded-lg group-first:rounded-t-lg group-last:rounded-b-lg sm:group-first:rounded-s-lg sm:mt-0 sm:group-first:ms-0 sm:group-first:rounded-se-none sm:group-last:rounded-es-none sm:group-last:rounded-e-lg sm:text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none', invalid ? 'bg-red-400/20 border-red-600 focus:border-red-600 focus:ring-red-600 dark:bg-red-400/80 dark:border-red-400 dark:focus:ring-red-400 dark:border:ring-red-400' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:focus:ring-neutral-600 dark:border:ring-neutral-600', className]"
        :value="label"
        readonly
        :placeholder
        @focus="popupVisible = true">
    <div v-if="popupVisible" class="absolute z-50 mt-2">
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
                  class="size-10 flex justify-center items-center text-sm transition-colors"
                  :class="[
                      roundedDayClass(day.date),
              day.disabled
                ? 'text-gray-400 cursor-not-allowed opacity-50'
                : isSelected(day.date)
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
              @click="value = tempSelectedDate; popupVisible = false"
              class="px-3 py-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>