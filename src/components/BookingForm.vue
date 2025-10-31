<script setup lang="ts">
import {reactive, ref} from "vue";
import PaymentMethodDialog from "./PaymentMethodDialog.vue";
import type {FormFields} from "../interfaces/form-builder.interface.ts";
import FormBuilder from "./FormBuilder.vue";

const paymentMethodDialogVisibility = ref<boolean>(false);

</script>

<template>

  <!--  &lt;!&ndash;  <form-container title="Data Pribadi">&ndash;&gt;-->
  <!--  &lt;!&ndash;    <input-container label="Nama lengkap" v-slot="attr" :validator="validator['name']">&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="text" placeholder="Nama lengkap"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;    </input-container>&ndash;&gt;-->

  <!--  &lt;!&ndash;    <input-container label="Email" v-slot="attr" :validator="validator.name">&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="email" placeholder="example@mail.com"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;    </input-container>&ndash;&gt;-->

  <!--  &lt;!&ndash;    <input-container label="No Whatsapp" v-slot="attr" :validator="validator.name">&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="tel" placeholder="+62 xxxx xxxx xxxx"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;    </input-container>&ndash;&gt;-->

  <!--  &lt;!&ndash;    <input-container label="Media Sosial" v-slot="attr" :validator="validator.name">&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="tel" placeholder="Instagram"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="tel" placeholder="TikTok"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;    </input-container>&ndash;&gt;-->

  <!--  &lt;!&ndash;    <input-container label="Institusi" v-slot="attr" :validator="validator.name">&ndash;&gt;-->
  <!--  &lt;!&ndash;      <input-text v-model="formData.name" v-bind="{...attr}" type="tel"&ndash;&gt;-->
  <!--  &lt;!&ndash;                  placeholder="Institusi, perusahaan, organisasi (Kosongkan jika personal)"/>&ndash;&gt;-->
  <!--  &lt;!&ndash;    </input-container>&ndash;&gt;-->
  <!--  &lt;!&ndash;  </form-container>&ndash;&gt;-->
  <!--  &lt;!&ndash; End Section &ndash;&gt;-->

  <!--  &lt;!&ndash; Section &ndash;&gt;-->
  <!--  <section-->
  <!--      class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">-->
  <!--    <div class="sm:col-span-12">-->
  <!--      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">-->
  <!--        Detail Booking-->
  <!--      </h2>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <label for="af-submit-application-linkedin-url"-->
  <!--             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--        Tanggal & Waktu-->
  <!--      </label>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-9">-->
  <!--      &lt;!&ndash;      <date-time-picker v-model:date="dateNow" v-model:time="timeNow" date-format="DD MMMM YYYY"&ndash;&gt;-->
  <!--      &lt;!&ndash;      />&ndash;&gt;-->

  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <label for="af-submit-application-twitter-url"-->
  <!--             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--        Durasi-->
  <!--      </label>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-9">-->
  <!--      <input id="af-submit-application-twitter-url" type="number"-->
  <!--             placeholder="60 (dalam menit)"-->
  <!--             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <label for="af-submit-application-github-url"-->
  <!--             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--        Lokasi-->
  <!--      </label>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-9">-->
  <!--      <input id="af-submit-application-github-url" type="text"-->
  <!--             placeholder="Lokasi sesi foto"-->
  <!--             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->
  <!--  </section>-->
  <!--  &lt;!&ndash; End Section &ndash;&gt;-->

  <!--  &lt;!&ndash; Section &ndash;&gt;-->
  <!--  <section-->
  <!--      class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">-->
  <!--    <div class="sm:col-span-12">-->
  <!--      <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">-->
  <!--        Pilih paket & Pembayaran-->
  <!--      </h2>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <div class="inline-block">-->
  <!--        <label for="af-submit-application-bio"-->
  <!--               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--          Paket-->
  <!--        </label>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-9">-->
  <!--      <input id="af-submit-application-package"-->
  <!--             placeholder="Pilih paket foto"-->
  <!--             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <div class="inline-block">-->
  <!--        <label for="af-submit-application-bio"-->
  <!--               class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--          Kode Voucher-->
  <!--        </label>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-9">-->
  <!--      <input id="af-submit-application-voucher"-->
  <!--             placeholder="Masukan kode voucher"-->
  <!--             class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">-->
  <!--    </div>-->
  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--    <div class="sm:col-span-3">-->
  <!--      <label for="af-submit-application-resume-cv"-->
  <!--             class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">-->
  <!--        Bukti Pembayaran-->
  <!--      </label>-->
  <!--    </div>-->

  <!--    <div-->
  <!--        class="sm:col-span-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"-->
  <!--    >-->
  <!--      <label for="af-submit-application-resume-cv" class="sr-only">Upload Bukti Pembayaran</label>-->

  <!--      <input-->
  <!--          type="file"-->
  <!--          name="af-submit-application-resume-cv"-->
  <!--          id="af-submit-application-resume-cv"-->
  <!--          class="block w-full border border-gray-200 shadow-sm rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400-->
  <!--           file:border-0-->
  <!--           file:bg-gray-100 file:me-4-->
  <!--           file:py-2 file:px-4-->
  <!--           dark:file:bg-neutral-700 dark:file:text-neutral-400"-->
  <!--      >-->

  <!--      <button-->
  <!--          type="button"-->
  <!--          class="py-3 px-4 inline-flex justify-center text-nowrap items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600 w-full sm:w-auto"-->
  <!--          @click="paymentMethodDialogVisibility = true"-->
  <!--      >-->
  <!--        Metode Pembayaran-->
  <!--      </button>-->
  <!--    </div>-->

  <!--    &lt;!&ndash; End Col &ndash;&gt;-->

  <!--  </section>-->

  <payment-method-dialog v-model="paymentMethodDialogVisibility"/>
</template>

<style scoped>

</style>