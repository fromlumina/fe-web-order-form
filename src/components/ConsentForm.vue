<script setup lang="ts">

</script>

<template>
  <section
      class="py-8 dark:border-neutral-700"
  >
    <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
      Konfirmasi & Persetujuan
    </h2>

    <div class="mt-4 text-sm text-gray-600 dark:text-neutral-400 space-y-3 leading-relaxed">
      <p>
        Dengan mengirim formulir ini, Anda menyatakan telah membaca dan menyetujui ketentuan pemesanan berikut:
      </p>

      <div
          class="bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200 rounded-xl p-4 space-y-2">
        <p>
          • <strong>Perubahan jadwal</strong> yang dilakukan kurang dari <strong>H-7</strong> akan
          dikenakan biaya tambahan, dan hanya dapat dilakukan apabila jadwal fotografer masih tersedia.
        </p>
        <p>
          • <strong>Preview foto</strong> akan diberikan paling lambat <strong>H+1</strong> setelah sesi pemotretan.
        </p>
        <p>
          • <strong>Foto hasil edit</strong> akan diberikan paling lambat <strong>H+7</strong> setelah memilih foto
          dari hasil preview.
        </p>
        <p>
          • <strong>DP yang sudah dibayarkan</strong> akan <strong>hangus</strong> apabila terjadi <strong>pembatalan
          sepihak</strong>.
        </p>
      </div>

      <p>
        Untuk informasi lebih lengkap, silakan baca
        <a
            href="/terms-and-conditions"
            target="_blank"
            class="text-blue-600 hover:underline font-medium"
        >
          Syarat & Ketentuan Lengkap
        </a>.
      </p>
    </div>

    <div class="mt-6 space-y-3">
      <label class="flex items-start space-x-2 text-sm text-gray-600 dark:text-neutral-400">
        <input
            type="checkbox"
            id="consent-terms"
            class="mt-0.5 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500"
        />
        <span>Saya telah membaca dan menyetujui ketentuan di atas.</span>
      </label>

      <label class="flex items-start space-x-2 text-sm text-gray-600 dark:text-neutral-400">
        <input
            type="checkbox"
            id="consent-social-media"
            class="mt-0.5 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500"
        />
        <span>Saya mengizinkan hasil foto saya digunakan pada media sosial Lumina.</span>
      </label>
    </div>
  </section>
</template>

<style scoped>

</style>