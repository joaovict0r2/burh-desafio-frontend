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

      <TagsManager class="create-job__field" />

      <Editor class="create-job__field" label="Descrição da vaga" v-model="form.description" />

      <button type="submit">Criar vaga</button>
    </form>
  </section>
</template>
  
<script setup lang='ts'>
definePageMeta({
  layout: "navbar"
})

const form = reactive({ 
  title: '',
  company: '',
  from: '',
  avatar: '',
  description: ''
})

function submitForm() {
  console.log(form)
}
</script>
  
<style lang="scss" scoped>
.create-job {
  &__title {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }

  &__form {
    padding: 16px;
  }

  &__field {
    & + & {
      margin-top: 24px;
    }
  }
}
</style>