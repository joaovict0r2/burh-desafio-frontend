<template>
  <form @submit.prevent="submit" class="form">  
    <TextField
      label="Nome"
      class="form__field"
      v-model="form.title"
      required
      :error="errors?.title?._errors[0]"
      placeholder="Nome da vaga"
    />

    <TextField
      label="Empresa"
      class="form__field"
      required
      v-model="form.company"
      :error="errors?.company?._errors[0]"
      placeholder="Empresa responsável pela vaga"
    />

    <TextArea
      label="Quem são vocês?"
      class="form__field"
      v-model="form.company_description"
      required
      :error="errors?.company_description?._errors[0]"
      placeholder="Um breve resumo sobre a empresa"
    ></TextArea>

    <TextField
      label="Remuneração"
      class="form__field"      
      ref="inputRef"
      v-model="form.salary"
      placeholder="Remuneração da vaga"
    />

    <TextField
      label="Data limite de contratação"
      class="form__field"      
      required
      type="date"
      v-model="form.limit_date"
      :error="errors?.limit_date?._errors[0]"
    />

    <Switch
      label="Vaga urgente?"
      class="form__field"
      v-model:checked="form.status"
    /> 

    <TagsManager
      class="form__field"
      :selected-tags="selectedTags"
      @handle-selected-tag="handleSelectedTag"
      @handle-remove-tag="handleRemoveTag"
    />

    <Editor
      class="form__field"
      label="Descrição da vaga"
      required
      :error="errors?.description?._errors[0]"
      v-model="form.description"
    />

    <CButton type="submit" height="40px" class="form__submit">
      {{ isEditing ? 'Atualizar vaga' : 'Criar vaga' }}
    </CButton>
  </form>
</template>
  
<script setup lang='ts'>
import { nextTick, onMounted, reactive, ref } from 'vue';
import type { PropType } from 'vue';
import { useCurrencyInput } from 'vue-currency-input';
import * as z from 'zod'

type Tag = {
  id: number,
  title: string
}

type Form = {
  title: string 
  company: string
  avatar: string
  company_description: string
  status: boolean
  salary: string
  limit_date: string | Date
  description: string
  selectedTags: Tag[]
  created_at: string
}

const { inputRef } = useCurrencyInput({
  currency: 'BRL',
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
})

const emit = defineEmits(['submit'])
const props = defineProps({
  formInstance: Object as PropType<Form>
})

const isEditing = computed(() => useRoute().name === 'jobs-edit-id')

const selectedTags = ref<Tag[]>([])
const form = reactive<Omit<Form, "selectedTags" | "created_at">>({ 
  title: props.formInstance?.title ?? '',
  company: props.formInstance?.company ?? '',
  avatar: props.formInstance?.avatar ?? '',
  company_description: props.formInstance?.company_description ?? '',
  description: props.formInstance?.description ?? '',
  status: props.formInstance?.status ?? false,
  salary: props.formInstance?.salary ?? '',
  limit_date: props.formInstance?.limit_date ?? ''
})

const formSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório"}),
  company: z.string().min(1, { message: "Campo obrigatório"}),
  company_description: z.string().min(1, { message: "Campo obrigatório"}),
  description: z.string().min(1, { message: "Campo obrigatório"}),
  limit_date: z.string().min(1, { message: "Campo obrigatório" })
})

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null)
  onMounted(() => {
    if (props.formInstance) {
      console.log(props.formInstance)
    selectedTags.value = props.formInstance.selectedTags
    nextTick()
  }
})

function submit() {
  const validSchema = formSchema.safeParse(form)

  if (!validSchema.success) {
    errors.value = validSchema.error.format()
    return
  } 
   
  emit('submit', {
    ...form,
    selectedTags: [...selectedTags.value],
    created_at: 
      props.formInstance 
      ? props.formInstance.created_at 
      :  new Date(),
    updated_at: new Date()
  })
}

function handleSelectedTag(tag: Tag) {
  selectedTags.value = [ ...selectedTags.value, tag ]
}

function handleRemoveTag(tagId: number) {
  selectedTags.value = selectedTags.value.filter((tag: Tag) => tag.id !== tagId)
}
</script>
  
<style lang="scss" scoped>
.form {
  &__title {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }

  &__field {
    & + & {
      margin-top: 24px;
    }
  }

  &__submit {
    width: 100%;
    margin-top: 20px;

    @include lg {
      width: 210px;
      height: 42px;
    }
  }
}
</style>