<template>
  <div class="job">
    <Back class="job__back-icon" path="/jobs" />
    
    <section class="job__header">
      <div class="job__header-icon">
        <h1 class="job__title">{{ job?.title }}</h1>
        <!-- <DotsCircle /> -->
        <button @click="handleEditJob">editar</button>
        <button @click="handleDeleteJob">deletar</button>
      </div>
      <span>{{ job?.company }}</span>
      <p>A experiência de trabalhar na Invillia é única. E global. Temos o nosso próprio jeito de conectar talentos e construir inovações.</p>

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
const jobId = useRoute().params.id

const { data: job } = useFetch(`https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs/${jobId}`)

async function handleDeleteJob() {
  try {
    const { data: response } = await useFetch(
      `https://crudcrud.com/api/d9f23ab095df4764ab0d3d573db4dd86/jobs/${jobId}`, {
        method: 'DELETE',
      }
    )

    console.log(response)
    navigateTo('/jobs')
  } catch (err) {
    console.log(err)
  }
}

function handleEditJob() {
  navigateTo(`edit/${jobId}`)
}
</script>
  
<style lang="scss" scoped>
.job {
  padding: 16px;

  &__back-icon {
    margin-bottom: 18px;
  }

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
    }
  }

  &__header-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      color: black;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 600
  }

  &__title--with-icon {
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
    margin-top: 40px;
  }

  &__content {
    margin-top: 20px;
  }
}
</style>