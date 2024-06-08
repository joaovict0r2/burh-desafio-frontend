<template>
  <div class="jobs">
    <div class="jobs__list">
      <div v-for="job in jobs" :key="job.id" class="jobs__card" @click="handleJobCard(job.id)">
        <div class="jobs__card-header">
          <img src="/assets/images/tripadvisor.webp" alt="">

          <div>
            <p>{{ job.job_title }}</p>
            <p>{{ job.job_company }}</p>
          </div>
        </div>

        <div v-if="job.tags?.length" class="jobs__card-tags">
          <Tag v-for="tag in job.tags" :key="tag.id" :label="tag.title" />
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

const jobs = [
  {
    id: 1,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: '/assets/images/chainguard.png',
    tags: [
      { 
        id: 324,
        title: '100% Remoto' 
      },
      { 
        id: 325,
        title: 'Senior'
      }
    ]
  },
  {
    id: 2,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: '/assets/images/chainguard.png',
    tags: [
      { id: 326, title: '100% Remoto' },
      { id: 327, title: 'Senior' },
      { id: 328, title: 'CLT' }
    ]
  },
  {
    id: 3,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 4,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 5,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 6,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 7,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 7,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 7,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 7,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
  {
    id: 7,
    job_title: "Sr Backend Developer",
    job_company: 'Invillia',
    from: "Linkedin",
    avatar: ''
  },
]

function handleJobCard(jobId: number) {
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