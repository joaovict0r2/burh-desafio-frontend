<template>
  <div class="job">
    <Back class="job__back-icon"/>
    
    <section class="job__header">
      <div class="job__header-icon">
        <h1 class="job__title">Sr Backend Developer</h1>
        <!-- <DotsCircle /> -->
        <button @click="handleEditJob">editar</button>
        <button @click="handleDeleteJob">deletar</button>
      </div>
      <span>Invillia</span>
      <p>A experiência de trabalhar na Invillia é única. E global. Temos o nosso próprio jeito de conectar talentos e construir inovações.</p>

      <div class="job__tags">
        <Tag 
          v-for="tag in tags"
          :label="tag.title"
          :key="tag.id"
        />
      </div>
    </section>

    <section class="job__about">
      <div class="job__title job__title--with-icon">
        <OutlineListBox />
        <p>Sobre</p>
      </div>

      <p v-html="userStore.username" class="job__content" />
    </section>
  </div>
</template>
  
<script setup>
import OutlineListBox from 'vue-material-design-icons/ListBoxOutline.vue'
import DotsCircle from 'vue-material-design-icons/DotsVerticalCircleOutline.vue'
import { useUserStore } from '~/store/UserStore';

definePageMeta({
  layout: "navbar"
})

const userStore = useUserStore()
const jobId = useRoute().params.id
const tags = [
  { id: 1, title: '100% Remoto'},
  { id: 2, title: 'CLT'},
  { id: 3, title: 'Senior'},
]

function handleEditJob() {
  navigateTo({
    path: 'create',
    query: { jobId }
  })
}

function handleDeleteJob() {
  console.log(jobId)
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