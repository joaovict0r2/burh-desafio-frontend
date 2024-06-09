<template>
  <div class="input">
    <label for="input" class="input__label">{{ label }}</label>
    <input
      id="input"
      class="input__field"
      :class="{ 'textfield--invalid': error }"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(['update:modelValue'])
defineProps({
  type: String,
  placeholder: String,
  label: String,
  error: Boolean,
  modelValue: String
})


function updateModelValue(event: any) {
  emit('update:modelValue', event.target.value)
}
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