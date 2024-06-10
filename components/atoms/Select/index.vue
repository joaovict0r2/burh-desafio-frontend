<template>
  <div class="select">
    <div class="select__field">
      <TextField
        label="Tags"
        placeholder="Selecione as tags da vaga"
        @click="toggleSelectState"
      />
      <img
        alt="arrow icon"
        src="/assets/images/small-down.svg"
        class="select__icon"
        :class="{'select__icon--active': isSelectOpened }"
      >
    </div>

    <div v-show="isSelectOpened" class="select__dropdown">
      <p
        v-for="tag in tags"
        :key="tag.id"
        class="select__tag"
        @click="handleTagClick(tag)"
      >
        {{ tag.title }}
      </p>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { tags } from '~/mocks/tags';
type Tag = {
  id: number,
  title: string
}

const emit = defineEmits(['handle-selected-tag'])

const isSelectOpened = ref(false)

function handleTagClick(tag: Tag) {
  console.log('select')
  emit('handle-selected-tag', tag)
  toggleSelectState()
}

function toggleSelectState() {
  console.log('sd')
  isSelectOpened.value = !isSelectOpened.value
}
</script>
  
<style lang="scss" scoped>
.select {
  position: relative;

  &__field {
    position: relative; 
  }

  &__icon {
    position: absolute;
    right: 15px;
    bottom: 12px;
    transition: all .2s ease;

    &--active {
      transform: rotate(-180deg);
    }
  }

  &__dropdown {
    width: 100%;
    max-height: 200px;
    margin-top: 10px;
    background-color: $gray-100;
    border-radius: 8px;
    overflow: auto;
    position: absolute;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  &__tag {
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: $gray-200;
      transition: all .2s;
    }
  }
}
</style>