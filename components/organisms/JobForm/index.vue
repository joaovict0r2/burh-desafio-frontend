<template>
  <form @submit.prevent="submit" class="form">  
    <TextField
      label="Nome"
      class="form__field"
      v-model="form.title"
      placeholder="Nome da vaga"
    />

    <TextField
      label="Empresa"
      class="form__field"
      v-model="form.company"
      placeholder="Empresa responsável pela vaga"
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
      v-model="form.description"
    />

    <button type="submit">Criar vaga</button>
  </form>
</template>
  
<script setup lang='ts'>
import { nextTick, onMounted, reactive, ref } from 'vue';
import type { PropType } from 'vue';

type Tag = {
  id: number,
  title: string
}

type Form = {
  title: string 
  company: string
  avatar: string
  description: string
  selectedTags: Tag[]
  created_at: string
}

const emit = defineEmits(['submit'])
const props = defineProps({
  formInstance: Object as PropType<Form>
})

const selectedTags = ref<Tag[]>([])
const form = reactive<Omit<Form, "selectedTags" | "created_at">>({ 
  title: props.formInstance?.title ?? '',
  company: props.formInstance?.company ?? '',
  avatar: props.formInstance?.avatar ?? '',
  description: props.formInstance?.description ?? ''
})

onMounted(() => {
  if (props.formInstance) {
    selectedTags.value = props.formInstance.selectedTags
    nextTick()
  }
})

async function submit() {
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
}
</style>