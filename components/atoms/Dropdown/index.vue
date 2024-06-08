<template>
  <section class="dropdown">
    <button @click="toggleDropdown">
      <DotsCircle />
    </button>

    <div></div>
  </section>
</template>
  
<script setup>
import DotsCircle from 'vue-material-design-icons/DotsVerticalCircleOutline.vue'
  
const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = ! isDropdownOpen.value
}
</script>
  
<style>
  
</style>