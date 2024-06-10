<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__content">
        <div v-if="!isHeaderContentEnable" class="header__text">
          <h2>Ola, {{ userStore.username }}</h2>

          <h2>
            Discover the best remote jobs to work from home
          </h2>
          <p>Browse thousands of remote job listings to work at startups and leading companies.</p>
        </div>
    
        <CButton 
          mode="transparent"
          height="40px"
          width="100%"
          @click="createJob"
        >
          Publicar uma vaga
        </CButton>
      </div>
    </div>
  
    <img src="/assets/images/waves.svg" alt="wave-shape">
  </div>
</template>
  
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordName } from 'vue-router';
import { useUserStore } from '~/store/UserStore';

const userStore = useUserStore()

const props = defineProps({
  pathName: String as PropType<RouteRecordName | null>
})

const isHeaderContentEnable = computed(() => {
  const notAllowedPaths = [
    'jobs-edit-id',
    'jobs-create',
    'jobs-id',
  ]

  return notAllowedPaths.includes(props.pathName as string)
})

function createJob() {
  navigateTo('jobs/create')
}
</script>
  
<style lang="scss" scoped>
.header {
  &__wrapper {
    padding: 20px 16px 20px 16px;
    background-color: $green-100;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  &__content {
    width: 100%;
    max-width: 1200px;

    button {
      @include sm {
        width: 210px;
      }
    }
  }

  &__text {
    width: 100%;
    max-width: 450px;
    margin-top: 60px;
    margin-bottom: 20px;
  
    h2 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 16px;
    }
  
    p {
      font-size: 16px;
    }
  }

  img {
    width: 100%;
    height: 20px;
  }
}
</style>