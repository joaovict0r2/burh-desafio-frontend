<template>
  <section class="edit">
    <Back :path="`/jobs/${jobId}`" />

    <p>Atualizar dados da vaga</p>

    <JobForm @submit="submitForm" :formInstance="job" />
  </section>
</template>
  
<script setup lang='ts'>
definePageMeta({ layout: "navbar" })
const { jobService } = useService()
const jobId = useRoute().params.id

const toast = useToast()

const { data: job } = await useAsyncData(
  () => jobService.getJobById(jobId)
)

async function submitForm(body: any) {
  await jobService.updateJob(body, jobId)
    .then(() => { navigateTo('/jobs') })
    .catch(() => toast.error('Algo deu errado'))
}
</script>
  
<style lang="scss" scoped>
.edit {
  padding: 16px;
  margin-bottom: 40px;

  p {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }
}
</style>