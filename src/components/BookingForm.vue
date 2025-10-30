<script setup lang="ts">

import DateTimePicker from "./DateTimePicker.vue";
import {ref} from "vue";


const dateNow = ref<Date | undefined>(undefined)
</script>

<template>

  <!-- Section -->
  <section
      class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
    <div class="sm:col-span-12">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        Data Pribadi
      </h2>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-full-name"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Nama Lengkap
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <div class="sm:flex">
        <input id="af-submit-application-full-name" type="text"
               class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
               placeholder="Nama lengkap">
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-email"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Email
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-email" type="email"
             placeholder="example@mail.com"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <div class="inline-block">
        <label for="af-submit-application-phone"
               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
          No Whatsapp
        </label>
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-phone" type="tel"
             placeholder="+62 xxx xxxx xxxx"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-full-name" class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Media Sosial
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <div class="sm:flex">
        <input type="text" placeholder="TikTok" class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
        <input type="text" placeholder="Instagram" class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      </div>
    </div>

    <div class="sm:col-span-3">
      <div class="inline-block">
        <label for="af-submit-application-current-company"
               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
          Institusi
        </label>
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-current-company" type="text"
             placeholder="Institusi, perusahaan, organisasi (Kosongkan jika personal)."
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->
  </section>
  <!-- End Section -->

  <!-- Section -->
  <section
      class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
    <div class="sm:col-span-12">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        Detail Booking
      </h2>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-linkedin-url"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Tanggal & Waktu
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <date-time-picker v-model:date="dateNow" date-format="DD MMMM YYYY"
      />

    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-twitter-url"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Durasi
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-twitter-url" type="number"
             placeholder="60 (dalam menit)"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-github-url"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Lokasi
      </label>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-github-url" type="text"
             placeholder="Lokasi sesi foto"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->
  </section>
  <!-- End Section -->

  <!-- Section -->
  <section
      class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
    <div class="sm:col-span-12">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
        Pilih paket & Pembayaran
      </h2>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <div class="inline-block">
        <label for="af-submit-application-bio"
               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
          Paket
        </label>
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-package"
             placeholder="Pilih paket foto"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <div class="inline-block">
        <label for="af-submit-application-bio"
               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
          Kode Voucher
        </label>
      </div>
    </div>
    <!-- End Col -->

    <div class="sm:col-span-9">
      <input id="af-submit-application-voucher"
             placeholder="Masukan kode voucher"
             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
    </div>
    <!-- End Col -->

    <div class="sm:col-span-3">
      <label for="af-submit-application-resume-cv"
             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
        Bukti Pembayaran
      </label>
    </div>

    <div
        class="sm:col-span-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
    >
      <label for="af-submit-application-resume-cv" class="sr-only">Upload Bukti Pembayaran</label>

      <input
          type="file"
          name="af-submit-application-resume-cv"
          id="af-submit-application-resume-cv"
          class="block w-full border border-gray-200 shadow-sm rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
           file:border-0
           file:bg-gray-100 file:me-4
           file:py-2 file:px-4
           dark:file:bg-neutral-700 dark:file:text-neutral-400"
      >

      <button
          type="button"
          class="py-3 px-4 inline-flex justify-center text-nowrap items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600 w-full sm:w-auto"
      >
        Metode Pembayaran
      </button>
    </div>

    <!-- End Col -->

  </section>
  <!-- End Section -->
</template>

<style scoped>

</style>