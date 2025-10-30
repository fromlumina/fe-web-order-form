<script setup lang="ts">
import Dialog from "./Dialog.vue";
import {ref} from "vue";

const visible = defineModel<boolean>({required: true})

const banks = ref([
  {
    name: "Bank BCA",
    account: "1234567890",
    owner: "Nama Pemilik",
    logo: "https://www.bca.co.id/-/media/Feature/Card/List-Card/Tentang-BCA/Brand-Assets/Logo-BCA/Logo-BCA_Biru.png",
  },
  {
    name: "Bank Mandiri",
    account: "9876543210",
    owner: "Nama Pemilik",
    logo: "https://www.bankmandiri.co.id/image/layout_set_logo?img_id=31567&t=1757693631430",
  },
  {
    name: "Bank BRI",
    account: "1122334455",
    owner: "Nama Pemilik",
    logo: "https://bri.co.id/o/bri-corporate-theme/images/bri-logo.png",
  },
  {
    name: "SeaBank",
    account: "5566778899",
    owner: "Nama Pemilik",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SeaBank.svg/378px-SeaBank.svg.png",
  },
  {
    name: "Bank BNI",
    account: "4433221100",
    owner: "Nama Pemilik",
    logo: "https://www.bni.co.id/Portals/1/BNI/Images/logo-bni-new.png",
  },
]);

const copyToClipboard = (accountNumber: string) => {
  navigator.clipboard.writeText(accountNumber);
  showToast()
};

const toastVisible = ref(false);
const toastMessage = ref('');

const showToast = () => {
  toastMessage.value = 'Nomor rekening berhasil disalin!';
  toastVisible.value = true;

  setTimeout(() => {
    toastVisible.value = false;
  }, 3000); // toast otomatis hilang setelah 3 detik
};
</script>

<template>
  <Dialog title="Metode Pembayaran" :visible @close="visible = false">
    <section class="bg-white py-12 px-6 md:px-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Metode Pembayaran</h2>
        <p class="text-gray-500 mb-10">
          Pembayaran layanan hanya dapat dilakukan melalui
          <strong>transfer bank</strong> ke salah satu rekening berikut:
        </p>

        <!-- Daftar Bank -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
              v-for="(bank, index) in banks"
              :key="index"
              class="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <img
                :src="bank.logo"
                :alt="bank.name"
                class="h-10 mb-3 object-contain"
            />
            <h3 class="font-semibold text-gray-800">{{ bank.name }}</h3>
            <p class="text-gray-600 text-sm">
              No. Rekening: <strong>{{ bank.account }}</strong>
            </p>
            <p class="text-gray-500 text-xs mt-1">a.n. {{ bank.owner }}</p>

            <div v-if="toastVisible" class="fixed bottom-5 right-5 space-y-3 z-50">
              <div class="max-w-xs bg-gray-800 text-sm text-white rounded-xl shadow-lg dark:bg-neutral-900" role="alert"
                   tabindex="-1" aria-labelledby="hs-toast-solid-color-dark-label">
                <div id="hs-toast-solid-color-dark-label" class="flex p-4">
                  Nomor rekening berhasil disalin!

                  <div class="ms-auto">
                    <button type="button"
                            class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-hidden focus:opacity-100"
                            aria-label="Close">
                      <span class="sr-only">Close</span>
                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                           viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Toast -->
            </div>
            <button
                @click="copyToClipboard(bank.account)"
                type="button"
                class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
            >
              Salin nomor rekening
            </button>
          </div>
        </div>

        <p class="text-gray-500 text-sm mt-10">
          Setelah melakukan pembayaran, mohon unggah bukti transfer Anda melalui form booking untuk proses verifikasi.
        </p>
      </div>
    </section>

    <template #footer>
      <button type="button"
              class="justify-center py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              @click="visible=false">
        Tutup
      </button>
    </template>
  </Dialog>
</template>