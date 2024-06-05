<template>
  <form class="form">
    <p class="form__title">Informações da vaga</p>

    <TextField label="Nome" v-model="formData.job_title" placeholder="Nome da vaga" class="form__field"/>
    <TextField label="Empresa" v-model="formData.job_title" placeholder="Empresa responsável pela vaga" class="form__field"/>
    <Select />
  </form>
</template>
  
<script setup lang='ts'>
definePageMeta({
  layout: "navbar"
})

const formData = reactive({ 
  job_title: '',
  job_company: '',
  job_from: '',
  avatar: '',
})

// {
//     id: 1,
//     job_title: "Sr Backend Developer",
//     job_company: 'Invillia',
//     from: "Linkedin",
//     avatar: '/assets/images/chainguard.png',
//     tags: [
//       { 
//         id: 324,
//         title: '100% Remoto' 
//       },
//       { 
//         id: 325,
//         title: 'Senior'
//       }
//     ]
//   },
</script>
  
<style lang="scss" scoped>
.form {
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