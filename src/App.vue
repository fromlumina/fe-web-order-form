<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
});
</script>

<template>
  <!-- Card Section -->
  <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow-xs p-4 sm:p-7 dark:bg-neutral-900">
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
          Let’s Capture Your Story
        </h2>
        <p class="text-sm text-gray-600 dark:text-neutral-400">
          Schedule your photo session and let our lens tell your story.
        </p>
      </div>
      <form>
        <!-- Section -->
        <section
            class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
          <div class="sm:col-span-12">
            <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Customer Information
            </h2>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <label for="af-submit-application-full-name"
                   class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Full name
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <div class="sm:flex">
              <input id="af-submit-application-full-name" type="text"
                     class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                     placeholder="First name">
              <input type="text"
                     class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg sm:text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                     placeholder="Last name">
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
                Phone
              </label>
            </div>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-phone" type="text"
                   placeholder="+62 xxx xxxx xxxx"
                   class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <div class="inline-block">
              <label for="af-submit-application-current-company"
                     class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Institution
              </label>
            </div>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-current-company" type="text"
                   placeholder="Enter your institution, company, or organization name (leave blank if personal)."
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
              Booking Details
            </h2>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <label for="af-submit-application-linkedin-url"
                   class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Booking Date & Time
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-linkedin-url" type="text"
                   :placeholder="(new Date()).toLocaleString()"
                   class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <label for="af-submit-application-twitter-url"
                   class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Duration
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-twitter-url" type="text"
                   placeholder="60 (in minutes)"
                   class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <label for="af-submit-application-github-url"
                   class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Location
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-github-url" type="text"
                   placeholder="Where will the photo session take place?"
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
              Package & Payment
            </h2>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <div class="inline-block">
              <label for="af-submit-application-bio"
                     class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Package
              </label>
            </div>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-package" type="email"
                   placeholder="Select your package"
                   class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <div class="inline-block">
              <label for="af-submit-application-bio"
                     class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
                Voucher Code (Optional)
              </label>
            </div>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <input id="af-submit-application-voucher"
                   placeholder="Have a voucher or promo code? Enter it here to enjoy your discount."
                   class="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
          </div>
          <!-- End Col -->

          <div class="sm:col-span-3">
            <label for="af-submit-application-resume-cv"
                   class="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500">
              Transfer Proof
            </label>
          </div>
          <!-- End Col -->

          <div class="sm:col-span-9">
            <label for="af-submit-application-resume-cv" class="sr-only">Choose file</label>
            <input type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" class="block w-full border border-gray-200 shadow-sm rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
             file:border-0
            file:bg-gray-100 file:me-4
            file:py-2 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400">
          </div>
          <!-- End Col -->

        </section>
        <!-- End Section -->

        <!-- Section -->
        <section
            class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-neutral-700 dark:first:border-transparent">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Confirmation & Consent
          </h2>

          <p class="mt-3 text-sm text-gray-600 dark:text-neutral-400">
            By submitting this form, you confirm that you have read and agree to our
            <a href="/terms-and-conditions" target="_blank" class="text-blue-600 hover:underline">
              Terms and Conditions
            </a>.
          </p>

          <div class="mt-5 flex">
            <input type="checkbox" id="consent-terms"
                   class="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600
             checked:border-blue-600 focus:ring-blue-500 disabled:opacity-50
             disabled:pointer-events-none dark:bg-neutral-900
             dark:border-neutral-600 dark:checked:bg-blue-500
             dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
            <label for="consent-terms" class="text-sm text-gray-500 ms-2 dark:text-neutral-400">
              I have read and agree to the Terms and Conditions.
            </label>
          </div>

          <div class="mt-3 flex">
            <input type="checkbox" id="consent-social-media"
                   class="shrink-0 mt-0.5 border-gray-300 rounded-sm text-blue-600
             checked:border-blue-600 focus:ring-blue-500 disabled:opacity-50
             disabled:pointer-events-none dark:bg-neutral-900
             dark:border-neutral-600 dark:checked:bg-blue-500
             dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
            <label for="consent-social-media" class="text-sm text-gray-500 ms-2 dark:text-neutral-400">
              I agree that my photos may be used or uploaded on Lumina’s social media platforms.
            </label>
          </div>
        </section>

        <!-- End Section -->

        <button type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Submit
        </button>
      </form>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Card Section -->
</template>
