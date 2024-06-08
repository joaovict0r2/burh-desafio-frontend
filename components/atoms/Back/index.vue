<template>
  <NuxtLink class="back" :to="path">
    <ChevronLeft />
    Back
  </NuxtLink>
</template>
  
<script setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft'
  
defineProps({ path: String })
</script>
  
<style>
.back {
  display: flex;
  height: 18px;
  margin-left: -5px;
  cursor: pointer;
  text-decoration: none;
  color: black;

  svg {
    width: 18px;
    height: 18px;
  }
}
</style>