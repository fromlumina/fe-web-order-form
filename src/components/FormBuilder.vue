<script setup lang="ts">
import type {FormField, FormFields} from "../interfaces/form-builder.interface.ts";
import {computed} from "vue";
import InputText from "./InputText.vue";
import InputContainer from "./InputContainer.vue";
import FormContainer from "./FormContainer.vue";
import InputTime from "./InputTime.vue";
import InputDate from "./InputDate.vue";

interface FormBuilderProps {
  groupFields: FormFields
}

const props = defineProps<FormBuilderProps>()
const emit = defineEmits(['submit'])
const data = defineModel<any>({required: true})

const validateField = (field: FormField) => {
  let errorMessage = undefined
  const items = []
  let required = false
  for (const item of field.items) {
    const value = data.value[item.field]
    if (item.required) {
      required = true
    }
    if (value === undefined) {
      items.push({...item, invalid: false})
      continue
    }
    if (item.required && !value) {
      items.push({...item, invalid: true})
      errorMessage = item.required.message
      continue
    }
    if (item.type === 'text' && item.minLength && String(value).length < item.minLength.value) {
      items.push({...item, invalid: true})
      errorMessage = item.minLength.message
      continue
    }
    items.push({...item, invalid: false})
  }
  return {
    ...field,
    required,
    errorMessage,
    items,
  }
}

const validatedGroups = computed(() => props.groupFields.map(group => ({
  ...group,
  children: group.children.map(field => validateField(field)),
})))

const handleSubmit = () => {
  for (const group of props.groupFields) {
    for (const field of group.children) {
      for (const item of field.items) {
        const value = data.value[item.field]
        if (value === undefined) data.value[item.field] = ""
      }
    }
  }
  const invalid = validatedGroups.value.some(x => x.children.some(y => y.errorMessage))
  if (invalid) return
  emit('submit')
}

type InputType = 'text' | 'time' | 'date' | 'select' | 'radio' | 'file'

const componentsMap: Record<InputType, any> = {
  text: InputText,
  time: InputTime,
  date: InputDate,
  select: InputText,
  radio: InputText,
  file: InputText,
}

const getInputComponent = (type: string) => {
  return componentsMap[type as InputType] || InputText
}

const getInputProps = (item: any) => {
  const common = {
    placeholder: item.placeholder,
    invalid: item.invalid,
    className: item.className,
    variant: item.variant,
  } as any

  if (item.type === 'text') common.maxlength = item.maxLength?.value
  if (item.type === 'date') common.format = item.format

  return common
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <form-container
        v-for="group in validatedGroups"
        :key="group.title"
        :title="group.title"
    >
      <input-container v-for="field in group.children" :key="field.label" v-bind="field">
        <component
            v-for="item in field.items"
            :key="item.field"
            :is="getInputComponent(item.type)"
            v-model="data[item.field]"
            v-bind="getInputProps(item)"
        />
      </input-container>
    </form-container>
    <slot/>
  </form>

</template>
