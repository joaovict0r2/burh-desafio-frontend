<template>
  <div class="job">
    <Back path="/jobs" />
    
    <section class="job__header">
      <div class="job__header-icon">
        <h1 class="job__title">{{ job?.title }}</h1>

        <Dropdown 
          @edit="handleEditJob"
          @delete="handleDeleteJob"
        />
      </div>
      <span>{{ job?.company }}</span>
      
      <p>{{ job?.company_description }}</p>

      <div class="job__tags" v-if="job?.selectedTags.length">
        <Tag 
          v-for="tag in job?.selectedTags"
          :key="tag.id"
          :label="tag.title"
        />
      </div>
    </section>

    <section class="job__about">
      <div class="job__title job__title--with-icon">
        <OutlineListBox />
        <p>Sobre</p>
      </div>

      <p v-html="job?.description" class="job__content" />
    </section>
  </div>
</template>
  
<script setup lang="ts">
import OutlineListBox from 'vue-material-design-icons/ListBoxOutline.vue'
import DotsCircle from 'vue-material-design-icons/DotsVerticalCircleOutline.vue'

definePageMeta({ layout: "navbar" })
const { jobService } = useService()

const jobId = useRoute().params.id

const { data: job } = await useAsyncData(
  () => jobService.getJobById(jobId)
)

async function handleDeleteJob() {
  await jobService.deleteJob(jobId)
    .then(() => { navigateTo('/jobs') })
    .catch((err) => console.log(err))
}

function handleEditJob() {
  navigateTo(`edit/${jobId}`)
}
</script>
  
<style lang="scss" scoped>
.job {
  padding: 16px;
  margin-bottom: 40px;

  span {
    font-size: 14px;
    opacity: .6;
  }

  &__header {
    margin-top: 32px;

    p {
      font-size: 12px;
      font-weight: 500;
      margin-top: 14px;

      @include lg {
        font-size: 14px  
      }
    }

    span {
      @include lg {
        font-size: 16px;
      }
    }
  }

  &__header-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include lg {
      justify-content: inherit;
      gap: 14px;
    }

    svg {
      color: black;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600;

    @include lg {
      font-size: 32px;
    }
  }

  &__title--with-icon {
    font-size: 24px;
    display: flex;
    gap: 8px;
  }

  &__tags {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    overflow: auto;
    padding-bottom: 12px;
  }

  &__about {
    margin-top: 30px;
  }

  &__content {
    margin-top: 20px;
  }
}
</style>