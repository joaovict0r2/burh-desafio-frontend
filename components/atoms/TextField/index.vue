<template>
  <div class="input">
    <label for="input" class="input__label">{{ props.label }}</label>
    <input v-model="inputValue" id="input" :placeholder="props.placeholder" class="input__field"
      :class="{ 'textfield--invalid': error }" :type="type" @focus="$emit('on-focus')" @blur="$emit('on-blur')" />
  </div>
</template>

<script setup lang='ts'>
const inputValue = ref<string>()

type Props = {
  type?: string
  placeholder?: string
  error?: boolean
  label?: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import "../../../assets/css/animations/shake.scss";

.input {
  &__label {
    font-weight: 500;
  }

  &__field {
    width: 100%;
    border: 2px solid $gray-300;
    background-color: $gray-100;
    border-radius: 8px;
    padding: 14px 18px 14px 18px;
    font-size: 16px;
    margin-top: 6px;

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
}
</style>