<template>
  <section class="card" @click="$emit('click', job?._id)">
    <div class="card__header">
      <img src="/assets/images/tripadvisor.webp" alt="">

      <div>
        <p>{{ job?.title }}</p>
        <p>{{ job?.company }}</p>
      </div>
    </div>

    <div v-if="job?.selectedTags?.length" class="card__tags">
      <Tag v-for="tag in job?.selectedTags" :key="tag.id" :label="tag.title" />
    </div>

    <span class="card__date">Hoje</span>
  </section>
</template>
  
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { Job } from '~/services/JobService';

defineProps({
  job: Object as PropType<Job>
})
</script>
  
<style lang="scss">
.card {
  padding: 16px;
  border: 1px solid $gray-200;
  border-radius: 8px;
  position: relative;

  & + & {
    margin-top: 16px;
  }

  &__header {
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

  &__tags {
    margin-top: 18px;
    display: flex;
    gap: 8px;
  }

  &__date {
    font-size: 14px;
    opacity: .5;
    position: absolute;
    right: 6px;
    top: 5px;
  }
}
</style>