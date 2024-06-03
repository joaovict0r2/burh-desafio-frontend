<template>
  <input v-model="inputValue" :placeholder="props.placeholder" class="textfield"
    :class="{ 'textfield--invalid': error }" :type="type" />
</template>

<script setup lang='ts'>
const inputValue = ref<string>(null)

type Props = {
  type?: string
  placeholder?: string
  error?: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import "../../../assets/css/animations/shake.scss";

.textfield {
  width: 100%;
  border: 2px solid $gray-300;
  background-color: $gray-100;
  border-radius: 8px;
  padding: 14px 18px 14px 18px;
  font-size: 16px;

  &--invalid {
    animation: shake .2s ease-in-out 0s 2;
  }

  &::placeholder {
    color: $gray-500;
  }

  &:focus {
    border-color: $green-100;
    color: $gray-600;
  }

  &:focus-visible {
    outline: none;
  }
}
</style>