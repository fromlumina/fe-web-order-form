export type InputTextType = 'number' | 'text' | 'email' | 'password' | 'phone'
export type InputDateType = 'single' | 'range' | 'multiple'
export type InputFileType = 'single' | 'multiple'
export type InputSelectType = 'single' | 'multiple'
export type InputTimeType = '12h' | '24h'

export interface FormFieldItem {
    field: string
    placeholder?: string
    className?: string
    required?: {
        message: string
    }
}

export interface FormFieldInputText extends FormFieldItem {
    type: 'text'
    variant: InputTextType
    maxLength?: {
        value: number,
        message: string
    }
    minLength?: {
        value: number,
        message: string
    }
}

export interface FormFieldInputDate extends FormFieldItem {
    type: 'date'
    variant: InputDateType
    format: string
    minDate?: Date
    maxDate?: Date
}

export interface FormFieldInputFile extends FormFieldItem {
    type: 'file'
    variant: InputFileType
    usePreview?: boolean
    accept?: Date
    maxSize?: Date
}

export interface FormFieldInputSelect extends FormFieldItem {
    type: 'select'
    variant: InputSelectType
    options: {
        value: string
        label: string
    }[]
}

export interface FormFieldInputTime extends FormFieldItem {
    type: 'time'
    variant: InputTimeType
    maxTime?: {
        hour: number
        minute: number
    }
    minTime?: {
        hour: number
        minute: number
    }
}

export interface FormFieldInputRadio extends FormFieldItem {
    type: 'radio'
    options: {
        value: string
        label: string
    }[]
}

export type FormFieldInput =
    FormFieldInputText
    | FormFieldInputDate
    | FormFieldInputTime
    | FormFieldInputSelect
    | FormFieldInputFile
    | FormFieldInputRadio

export interface FormField {
    label: string
    items: FormFieldInput[]
}

export interface FormFieldGroup {
    title: string
    children: FormField[]
}

export type FormFields = FormFieldGroup[]