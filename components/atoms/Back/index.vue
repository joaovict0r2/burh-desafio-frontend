<template>
  <div class="back">
    <ChevronLeft />
    <p>Back</p>
  </div>
</template>
  
<script setup>
import ChevronLeft from 'vue-material-design-icons/ChevronLeft'
  
</script>
  
<style>
.back {
  display: flex;
  height: 18px;
  margin-left: -5px;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
}
</style>