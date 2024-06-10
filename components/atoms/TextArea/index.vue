<template>
  <div class="textarea">
    <label
      v-if="label"
      for="textarea"
      class="textarea__label"
    >
      {{ label }}
      <span v-if="required"> *</span>
    </label>

    <textarea
      id="input"
      class="textarea__field"
      :class="{
        'textarea__field--with-label': label
      }"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateModelValue"
      rows="7"
      cols="50"
      autocomplete="off"
    ></textarea>

    <span v-if="error" class="textarea__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps({
  type: String,
  placeholder: String,
  label: String,
  error: String,
  modelValue: String,
  animatedError: Boolean,
  required: Boolean,
})

function updateModelValue(event: any) {
  emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;

  &__label {
    font-weight: 500;

    &--error {
      color: red;
    }

    span {
      color: red;
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

    &--error {
      border-color: red;
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
