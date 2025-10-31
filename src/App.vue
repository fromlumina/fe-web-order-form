<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import ConsentForm from "./components/ConsentForm.vue";
import SubmittedView from "./components/SubmittedView.vue";
import type {FormFields} from "./interfaces/form-builder.interface.ts";
import FormBuilder from "./components/FormBuilder.vue";

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
});

const page = ref<number>(1)
const submitted = ref<boolean>(false)

const formFields: FormFields = [
  {
    title: "Data Pribadi",
    children: [
      {
        label: "Nama lengkap",
        items: [
          {
            field: 'name',
            type: 'text',
            variant: "text",
            placeholder: "Nama lengkap",
            required: {
              message: "Nama harus diisi"
            },
            maxLength: {
              value: 100,
              message: "Maksimal 100 karakter"
            },
          }
        ]
      },
      {
        label: "Email",
        items: [
          {
            field: 'email',
            type: 'text',
            variant: "email",
            placeholder: "example@mail.com",
            required: {
              message: "Email harus diisi"
            },
          }
        ]
      },
      {
        label: "No WhatsApp",
        items: [
          {
            field: 'phoneNumber',
            type: 'text',
            variant: "phone",
            placeholder: "+62 xxxx xxxx xxxx",
            required: {
              message: "No WhatsApp harus diisi",
            },
          }
        ]
      },
      {
        label: "Media Sosial",
        items: [
          {
            field: 'instagram',
            type: 'text',
            variant: "text",
            placeholder: "Instagram",
          },
          {
            field: 'tiktok',
            type: 'text',
            variant: "text",
            placeholder: "TikTok",
          }
        ]
      },
      {
        label: "Institusi",
        items: [
          {
            field: 'institution',
            type: 'text',
            variant: "text",
            placeholder: "Institusi, perusahaan, organisasi (Kosongkan jika personal)",
          }
        ]
      },
    ]
  },
  {
    title: "Detail Booking",
    children: [
      {
        label: "Tanggal & Waktu",
        items: [
          {
            field: 'date',
            type: 'date',
            variant: "range",
            format: "DD MMMM YYYY",
            placeholder: "Tanggal sesi foto",
            required: {
              message: "Tanggal harus diisi",
            },
          },
          {
            field: 'time',
            type: 'time',
            variant: "24h",
            placeholder: "Jam sesi foto",
            required: {
              message: "Jam sesi harus diisi",
            },
          }
        ]
      },
      {
        label: "Lokasi",
        items: [
          {
            field: 'location',
            type: 'text',
            variant: "text",
            placeholder: "Lokasi sesi foto",
            required: {
              message: "Lokasi harus diisi",
            },
          }
        ]
      }
    ]
  },
  {
    title: "Paket & Pembayaran",
    children: [
      {
        label: "Paket",
        items: [
          {
            field: 'package',
            type: 'text',
            variant: "text",
            placeholder: "Pilih paket foto",
            required: {
              message: "Pilih salah satu paket"
            },
          }
        ]
      },
      {
        label: "Durasi",
        items: [
          {
            field: 'duration',
            type: 'text',
            variant: "number",
            placeholder: "Durasi sesi foto",
            required: {
              message: "Durasi harus diisi"
            },
          }
        ]
      },
      {
        label: "Bukti Pembayaran",
        items: [
          {
            field: 'paymentProof',
            type: 'text',
            variant: "text",
            placeholder: "Unggah bukti pembayaran",
            required: {
              message: "Bukti pembayaran harus diisi"
            },
          }
        ]
      }
    ]
  }
]
const formData = reactive<any>({})
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
      <div>
        <form-builder v-if="page === 1" :group-fields="formFields" v-model="formData" @submit="page=2">
          <button type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Lanjutkan
          </button>
        </form-builder>
        <consent-form v-if="page === 2"/>

        <div v-if="page === 2" class="flex gap-4">
          <button type="button"
                  class="flex-1 justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600"
                  @click="page = 1">
            Kembali
          </button>
          <button type="button"
                  class="flex-1 justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  @click="submitted = true">
            Kirim
          </button>
        </div>
      </div>

    </div>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>
