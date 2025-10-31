import {reactive} from "vue";
import type {OrderFormPayload} from "../interfaces/order-form.interface.ts";
import {maxLength, minLength, required, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export const useOrderForm = () => {
    const formData = reactive<OrderFormPayload>({})

    const rules = {
        date: {required},
        duration: {required},
        email: {required, email, maxLength: maxLength(100)},
        instagram: {maxLength: maxLength(50)},
        institution: {maxLength: maxLength(150)},
        location: {required, maxLength: maxLength(200)},
        mediaReleaseConsent: {required},
        name: {required, maxLength: maxLength(150)},
        packageId: {required},
        paymentProof: {required},
        phone: {required, maxLength: maxLength(15), minLength: minLength(10)},
        tiktok: {maxLength: maxLength(50)},
        time: {required},
        voucherCode: {maxLength: maxLength(20)}
    }

    const validator = useVuelidate<OrderFormPayload>(rules, formData)

    return {
        formData,
        validator,
    }
}