<template>
  <div class="jobs">
    <div class="jobs__list">
      <div v-for="job in jobs" :key="job.title" class="jobs__card" @click="handleJobCard(job._id)">
        <div class="jobs__card-header">
          <img src="/assets/images/tripadvisor.webp" alt="">

          <div>
            <p>{{ job.title }}</p>
            <p>{{ job.company }}</p>
          </div>
        </div>

        <div v-if="job.selectedTags?.length" class="jobs__card-tags">
          <Tag v-for="tag in job.selectedTags" :key="tag.id" :label="tag.title" />
        </div>

        <span class="jobs__card-date">Hoje</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
definePageMeta({
  layout: 'navbar'
})

type Jobs = {
  title: string
  company: string
  description: string
  selectedTags: Array<{
    id: number
    title: string
  }>
}

const { data: jobs } =  useFetch<Jobs>("https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs")

function handleJobCard(jobId: string) {
  console.log(jobId)
  navigateTo(`jobs/${jobId}`)
}
</script>

<style lang="scss" scoped>
.jobs {
  &__list {
    padding: 20px 16px 20px 16px;
  }

  &__card {
    padding: 16px;
    border: 1px solid $gray-200;
    border-radius: 8px;
    position: relative;

    & + & {
      margin-top: 16px;
    }
  }

  &__card-header {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    p:nth-child(1) {
      font-size: 18px;
      font-weight: 600;
    }

    p:nth-child(2) {
      font-size: 14px;
    }
  }

  &__card-tags {
    margin-top: 18px;
    display: flex;
    gap: 8px;
  }

  &__card-date {
    font-size: 14px;
    opacity: .5;
    position: absolute;
    right: 6px;
    top: 5px;
  }
}
</style>