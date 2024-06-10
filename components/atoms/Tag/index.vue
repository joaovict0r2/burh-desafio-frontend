<template>
  <div
    class="tag"
    :class="{
      'tag--transparent': color === 'transparent',
      'tag--active': active
    }"
    @click="$emit('click')"
  >
    <img
      v-if="deleteable"
      src="/assets/images/cross-small.svg"
      alt="remove icon"
      @click="$emit('remove-tag')"
    >
    <p>{{ label }}</p>
  </div>
</template>
  
<script setup lang='ts'>
import type { PropType } from 'vue';

defineProps({
  label: String,
  color: String as PropType<'filled' | 'transparent'>,
  deleteable: Boolean,
  active: Boolean
})
</script>
  
<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 25px;
  background-color: #0eaa991c;
  gap: 4px;

  &--active {
    background-color: aqua;
  }
    
  &--transparent {
    background: transparent;
    border: 1px solid $gray-500;
  }

  p {
    font-size: 14px;
    line-height: 100%;
    font-weight: 500;
    white-space: nowrap;
  }
  
  img {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
}
</style>