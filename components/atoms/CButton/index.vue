4<template>
  <button class="button" :class="{'button--transparent': props.mode === 'transparent' }" @click="$emit('click')">{{ props.text }}</button>
</template>

<script setup lang='ts'>
defineEmits(['click'])

type Props = {
  text?: string
  width?: string
  height?: string
  mode?: 'transparent' | 'filled'
}

const props = defineProps<Props>()
const width = computed(() => props.width)
</script>

<style lang="scss" scoped>
.button {
  width: v-bind(width);
  height: v-bind(height);
  border: none;
  color: white;
  background-color: $green-200;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: $green-100;
    transition: all .4s ease;
  }

  &--transparent {
    background: transparent;
    border: 1px solid #fff;
  }
}
</style>