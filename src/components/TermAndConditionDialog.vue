<script setup lang="ts">
import Dialog from "./Dialog.vue";

const visible = defineModel<boolean>({required: true})
</script>

<template>
  <Dialog title="Syarat dan Ketentuan" :visible @close="visible = false">
    <section class="bg-gray-50">
      <div class="max-w-4xl mx-auto p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Syarat dan Ketentuan</h1>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">1. Pembayaran</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Uang muka (DP) minimal sebesar <strong>50%</strong> dari total biaya.</li>
            <li><strong>Pelunasan</strong> wajib dilakukan selambat-lambatnya <strong>H-2</strong> sebelum hari
              pelaksanaan sesi foto.
            </li>
            <li><strong>Pembatalan</strong> oleh klien akan mengakibatkan <strong>uang muka (DP) hangus</strong> dan
              tidak
              dapat dikembalikan.
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">2. Penjadwalan Ulang
            (Reschedule)</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Klien dapat melakukan penjadwalan ulang selama <strong>jadwal fotografer (FG)</strong> masih tersedia.
            </li>
            <li>Penjadwalan ulang yang dilakukan <strong>kurang dari H-7</strong> akan dikenakan <strong>biaya tambahan
              Rp50.000 – Rp100.000</strong>.
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">3. Hasil Foto (Photo
            Result)</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Preview foto</strong> akan diberikan maksimal pada <strong>H+1</strong> setelah sesi foto.</li>
            <li><strong>Foto hasil edit</strong> akan diserahkan maksimal <strong>H+7</strong> setelah klien memilih
              foto
              yang akan diedit.
            </li>
            <li>Proses <strong>editing</strong> hanya mencakup penyesuaian warna, pencahayaan, dan tone foto, tanpa
              pengubahan, pengurangan, atau penambahan objek maupun subjek.
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">4. Lokasi Pemotretan
            (Venue)</h2>
          <p class="text-gray-600">Apabila diperlukan <strong>pemesanan atau perizinan lokasi</strong>, hal tersebut
            menjadi tanggung jawab klien sepenuhnya.</p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">5. Keterlambatan</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Toleransi keterlambatan dari pihak klien adalah <strong>maksimal 15 menit</strong>. Jika waktu
              fotografer
              masih tersedia, sesi dapat diperpanjang sesuai kesepakatan.
            </li>
            <li>Apabila keterlambatan terjadi dari pihak fotografer (FG), klien berhak mendapatkan <strong>kompensasi
              berupa penambahan waktu sesi foto</strong> sesuai dengan durasi keterlambatan.
            </li>
          </ul>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">6. Persetujuan
            Publikasi</h2>
          <p class="text-gray-600">Klien memberikan izin kepada fotografer untuk menggunakan hasil foto untuk <strong>keperluan
            promosi, portofolio, atau publikasi</strong> di media sosial maupun platform lainnya.</p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">7. Penyimpanan
            File</h2>
          <p class="text-gray-600">File hasil foto akan <strong>tersimpan dan dapat diakses selama 3 bulan</strong>
            setelah tanggal penyerahan. Setelah periode tersebut, file akan <strong>dihapus secara permanen</strong>.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-700 mb-3 border-l-4 border-indigo-500 pl-3">8. Revisi Foto</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-2">
            <li>Revisi foto hanya mencakup <strong>penyesuaian pencahayaan (exposure balancing)</strong> atau <strong>pemotongan
              gambar (cropping)</strong>.
            </li>
            <li>Klien berhak melakukan <strong>maksimal 1 (satu) kali revisi</strong> terhadap foto yang telah diedit.
            </li>
          </ul>
        </div>
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