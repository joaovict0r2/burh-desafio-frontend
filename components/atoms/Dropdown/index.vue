<template>
  <section class="dropdown">
    <button @click="toggleDropdown">
      <DotsCircle />
    </button>

    <div v-if="isDropdownOpen" class="dropdown__content">
      <p @click="$emit('edit')">
        <PencilOutline />
        Editar
      </p>
      <p @click="$emit('delete')">
        <TrashCanOutline />
        Deletar
      </p>
    </div>
  </section>
</template>
  
<script setup>
import DotsCircle from 'vue-material-design-icons/DotsVerticalCircleOutline.vue'
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
  
const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = ! isDropdownOpen.value
}
</script>
  
<style lang="scss" scoped>
.dropdown {
  width: 24px;
  height: 24px;
  position: relative;
  
  button {
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
  }

  &__content {
    position: absolute;
    border-radius: 8px;
    right: 0;
    background-color: $gray-100;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    p {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 12px;
      border-radius: 8px;

      &:hover {
        background-color: $gray-200;
        transition: all .2s;
      }
    }
  }
}
</style>