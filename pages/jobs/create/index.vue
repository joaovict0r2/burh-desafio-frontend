<template>
  <section class="create">
    <Back path="/jobs" />

    <p>Informações da vaga</p>

    <JobForm @submit="submitForm" />
  </section>
</template>
  
<script setup lang='ts'>
import type { Job } from '~/services/JobService';
definePageMeta({ layout: "navbar" })

const { jobService } = useService()

async function submitForm(body: Job) {
  await jobService.createJob(body)
    .then(() => { navigateTo('/jobs') })
    .catch((err) => console.log(err))
}
</script>
  
<style lang="scss" scoped>
.create {
  padding: 16px;
  margin-bottom: 40px;

  p {
    font-size: 20px; 
    font-weight: 600;
    margin-bottom: 25px;
  }
}
</style>