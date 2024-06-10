<template>
  <div class="jobs">
    <TextField v-model="searchedTerm" placeholder="Insira sua busca" />
    <Filter label="Tags" class="jobs__filter">
      <template #content>
        <div class="jobs__filter-items">
          <Tag
            v-for="tag in tags"
            :key="tag.id"
            :label="tag.title"
            color="transparent"
            @click="handleSelectedTag(tag)"
          />
        </div>
      </template>
    </Filter>
    
    <div class="jobs__list" v-if="!pending">
      <Card
        v-if="filteredJobs.length"
        v-for="job in filteredJobs"
        :key="job?.title"
        :job="job"
        @click="handleJobCard(job?._id)" 
      />

      <div v-else-if="!filteredJobs.length && !pending" class="jobs__not-found">
        <p>Parece que não achamos vagas</p>
        <span>
          Certifique-se de que as palavras estão escritas corretamente ou possui vagas cadastradas.
        </span>
      </div>
    </div>

    <div class="loading" v-else>
      <DotLoading />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { tags } from '~/mocks/tags';
import type { Job } from '~/services/JobService';

type Tag = {
  id: number
  title: string
}

definePageMeta({ layout: 'navbar' })
const { jobService } = useService()
onMounted(() => fetchJobs())

const jobs = ref<Array<Job>>([])
const searchedTerm = ref<string>('')
const selectedTags = ref<Tag[]>([])
const pending = ref(true)

const filteredJobs = computed(() => {
  if (searchedTerm.value.trim().length > 0) {
    return jobs.value.filter((job) => {
      return (
        job.title.toLocaleLowerCase().includes(searchedTerm.value.trim().toLocaleLowerCase())
        || job.company.toLocaleLowerCase().includes(searchedTerm.value.trim().toLocaleLowerCase())
      )
    })
  }

  return jobs.value
})

async function fetchJobs() {
  await jobService.getJobs()
    .then((res) => {
      jobs.value = res 
      pending.value = false
    })
}

function handleJobCard(jobId: string) {
  navigateTo(`jobs/${jobId}`)
}

function handleSelectedTag(tag: Tag) {
  const tagAlreadySelected = selectedTags.value.some((item: Tag) => item.id === tag.id)

  if (tagAlreadySelected) {
    selectedTags.value = selectedTags.value.filter((item: Tag) => item.id !== tag.id)
    return
  }

  selectedTags.value = [ ...selectedTags.value, tag ]
}

function isCurrentTagActive(tagId: number) {
  return selectedTags.value.some((tag: Tag) => tag.id === tagId)
}
</script>

<style lang="scss" scoped>
.jobs {
  &__filter {
    margin-top: 12px;
  }
  
  &__filter-items {
    padding: 16px;
    display: flex;
    width: 100%;
    max-width: 350px;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__list {
    margin-top: 20px;
  }

  &__not-found {
    margin-top: 40px;
    text-align: center;

    p {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    span {
      font-weight: 400;
    }
  }
}

.loading {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>