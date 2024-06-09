<template>
  <section class="edit">
    <p>Atualizar dados da vaga</p>

    <JobForm @submit="submitForm" :formInstance="job" />
  </section>
</template>
  
<script setup lang='ts'>
definePageMeta({ layout: "navbar" })
const { jobService } = useService()
const jobId = useRoute().params.id

const { data: job } = await useAsyncData(
  () => jobService.getJobById(jobId)
)

async function submitForm(body: any) {
  await jobService.updateJob(body, jobId)
    .then(() => { navigateTo('/jobs') })
    .catch((err) => console.log(err))
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