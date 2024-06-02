4<template>
  <button class="button" @click="$emit('click')">{{ props.text }}</button>
</template>

<script setup lang='ts'>
defineEmits(['click'])

type Props = {
  text?: string
  width?: string
}

const props = defineProps<Props>()
const width = computed(() => props.width)
</script>

<style lang="scss" scoped>
.button {
  width: v-bind(width);
  border: none;
  color: white;
  background-color: $green-200;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: $green-100;
    transition: all .4s ease;
  }
}
</style>