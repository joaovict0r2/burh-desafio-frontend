<template>
  <div class="input">
    <label
      v-if="label"
      for="input"
      class="input__label"
    >
      {{ label }}
      <span v-if="required"> *</span>
    </label>

    <input
      id="input"
      class="input__field"
      :class="{ 
        'input__field--with-label': label,
        'input__field--animated-error': animatedError,
      }"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateModelValue"
      autocomplete="off"
    />

    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(['update:modelValue'])
defineProps({
  type: String,
  placeholder: String,
  label: String,
  error: String,
  modelValue: String,
  animatedError: Boolean,
  required: Boolean
})


function updateModelValue(event: any) {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/animations/shake.scss";

.input {
  width: 100%;

  &__label {
    font-weight: 500;
    
    span {
      color: red
    }
  }

  &__field {
    width: 100%;
    border: 2px solid $gray-300;
    background-color: $gray-100;
    border-radius: 8px;
    padding: 14px 18px 14px 18px;
    font-size: 16px;

    &--with-label {
      margin-top: 6px;
    }

    &--animated-error {
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

  &__error {
    font-size: 12px;
    color: red;
  }
}
</style>