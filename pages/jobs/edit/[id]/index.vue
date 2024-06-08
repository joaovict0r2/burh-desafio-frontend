<template>
  <section class="edit">
    <p>Atualizar dados da vaga</p>

    <JobForm @submit="submitForm" :formInstance="job" />
  </section>
</template>
  
<script setup lang='ts'>
definePageMeta({ layout: "navbar" })
const jobId = useRoute().params.id

const { data: job } = useFetch(`https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs/${jobId}`)

async function submitForm(body: any) {
  console.log(body)
  // try {
  //   await useFetch(
  //     "https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs",
  //     {
  //       method: 'PUT',
  //       body: body
  //     }
  //   )

  //   navigateTo('/jobs')
  // } catch (err) {
  //   console.log(err)
  // }
}
</script>
  
<style lang="scss" scoped>
.edit {
  padding: 16px;

  p {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }
}
</style>