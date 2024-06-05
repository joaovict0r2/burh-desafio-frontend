<template>
  <div class="header">
    <div class="header__content">
      <div v-if="props.pathName !== 'jobs-create'" class="header__text">
        <h2>
          Discover the best remote jobs to work from home
        </h2>
        <p>Browse thousands of remote job listings to work at startups and leading companies.</p>
      </div>
  
      <CButton text="Publicar uma vaga" mode="transparent" height="40px" width="100%" @click="handleCreateJob"/>
    </div>
  
    <img src="/assets/images/waves.svg" alt="wave-shape">
  </div>
</template>
  
<script setup lang='ts'>
import type { RouteRecordName } from 'vue-router';

type Props = {
  pathName?: RouteRecordName | null
}

const props = defineProps<Props>()

function headerAttributes(test: any) {
  return {
    'jobs-create': {
      title: 'Discover the best remote jobs to work from home',
      description: 'Browse thousands of remote job listings to work at startups and leading companies.'
    }
  }
}

function handleCreateJob() {
  navigateTo('jobs/create')
}
</script>
  
<style lang="scss" scoped>
.header {
  &__content {
    padding: 20px 16px 20px 16px;
    background-color: $green-100;
    color: #fff;
  }

  &__text {
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