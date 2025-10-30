<script setup lang="ts">
import {onMounted, ref} from "vue";
import BookingForm from "./components/BookingForm.vue";
import ConsentForm from "./components/ConsentForm.vue";
import SubmittedView from "./components/SubmittedView.vue";

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
});

const page = ref<number>(1)
const submitted = ref<boolean>(false)
</script>

<template>
  <!-- Card Section -->
  <submitted-view v-if="submitted"/>
  <div v-else class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
          Yuk, Booking Sesi Foto Kamu!
        </h2>
        <p class="text-sm text-gray-600 dark:text-neutral-400">
          Setiap momen bahagia pantas diabadikan
        </p>
      </div>
      <form>
        <booking-form v-if="page === 1"/>
        <consent-form v-if="page === 2"/>
        <button v-if="page === 1" type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                @click="page = 2">
          Lanjutkan
        </button>
        <div v-if="page === 2" class="flex gap-4">
          <button type="button"
                  class="flex-1 justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
          @click="page = 1">
            Kembali
          </button>
          <button type="button"
                  class="flex-1 justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          @click="submitted = true">
            Submit
          </button>
        </div>
      </form>

    </div>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>
