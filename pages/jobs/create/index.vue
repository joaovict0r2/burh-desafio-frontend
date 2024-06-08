<template>
  <section class="create">
    <p>Informações da vaga</p>

    <JobForm @submit="submitForm" />
  </section>
</template>
  
<script setup lang='ts'>
definePageMeta({ layout: "navbar" })

async function submitForm(body: any) {
  try {
    await useFetch(
      "https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs",
      {
        method: 'POST',
        body: body
      }
    )

    navigateTo('/jobs')
  } catch (err) {
    console.log(err)
  }
}
</script>
  
<style lang="scss" scoped>
.create {
  padding: 16px;

  p {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }
}
</style>