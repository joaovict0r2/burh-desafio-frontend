<template>
  <div class="tag" :class="{'tag--transparent': props.color === 'transparent'}">
    <img v-if="deleteable" src="/assets/images/cross-small.svg" alt="remove icon">
    <p>{{ props.label }}</p>
  </div>
</template>
  
<script setup lang='ts'>
type Props = {
  label: string
  color?: 'filled' | 'transparent'
  deleteable?: boolean
}

const props = defineProps<Props>()
</script>
  
<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 25px;
  background-color: #0eaa991c;
  gap: 4px;
    
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