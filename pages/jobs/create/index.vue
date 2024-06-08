<template>
  <section class="create-job">
    <p class="create-job__title">Informações da vaga</p>

    <form @submit.prevent="submitForm" class="create-job__form">  
      <TextField
        label="Nome"
        class="create-job__field"
        v-model="form.title"
        placeholder="Nome da vaga"
      />

      <TextField
        label="Empresa"
        class="create-job__field"
        v-model="form.company"
        placeholder="Empresa responsável pela vaga"
      />

      <TagsManager
        class="create-job__field"
        :selected-tags="selectedTags"
        @handle-selected-tag="handleSelectedTag"
        @handle-remove-tag="handleRemoveTag"
      />

      <Editor class="create-job__field" label="Descrição da vaga" v-model="form.description" />

      <button type="submit">Criar vaga</button>
    </form>
  </section>
</template>
  
<script setup lang='ts'>
import { useUserStore } from '~/store/UserStore';

const userStore = useUserStore()
definePageMeta({
  layout: "navbar"
})

type Tag = {
  id: number,
  title: string
}

const selectedTags = ref<Tag[]>([])
const form = reactive({ 
  title: '',
  company: '',
  from: '',
  avatar: '',
  description: ''
})

function submitForm() {
  const payload = {
    ...form,
    selectedTags: [...selectedTags.value]
  }
  console.log(payload)
  userStore.signin({ name: form.description })
}

function handleSelectedTag(tag: Tag) {
  selectedTags.value = [ ...selectedTags.value, tag ]
}

function handleRemoveTag(tagId: number) {
  selectedTags.value = selectedTags.value.filter((tag: Tag) => tag.id !== tagId)
}
</script>
  
<style lang="scss" scoped>
.create-job {
  padding: 16px;

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