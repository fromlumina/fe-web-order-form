export interface OrderFormPayload {
    name?: string
    email?: string
    phone?: string
    instagram?: string
    tiktok?: string
    institution?: string
    date?: Date
    time?: {
        hour: number
        minute: number
    }
    duration?: number
    location?: string
    packageId?: string
    voucherCode?: string
    paymentProof?: File
    mediaReleaseConsent?: boolean
}