<template>
  <div class="jobs">
    <div class="jobs__search">
      <Search />

      <CButton width="50px" height="50px">
        <Magnify />
      </CButton> 
    </div>

    <div class="jobs__list">
      <Card
        v-for="job in jobs"
        :key="job?.title"
        :job="job"
        @click="handleJobCard(job?._id)" 
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Magnify from 'vue-material-design-icons/Magnify.vue'

definePageMeta({ layout: 'navbar' })
const { jobService } = useService()

const { data: jobs } = await useAsyncData(
  () => jobService.getJobs()
)

function handleJobCard(jobId: string) {
  navigateTo(`jobs/${jobId}`)
}
</script>

<style lang="scss" scoped>
.jobs {
  padding: 16px;

  &__search {
    // width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;

    button {
      width: 54px;
    }
  }

  &__list {
    margin-top: 20px;
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