<template>
  <div class="dot-flashing"></div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
@import "../../../assets/css/animations/dot-flashing.scss";

.dot-flashing {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #0EAA99;
  color: #0EAA99;
  animation: dot-flashing 1s infinite linear alternate;
  animation-delay: 0.5s;
}

.dot-flashing::before, .dot-flashing::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
}

.dot-flashing::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #0EAA99;
  color: #0EAA99;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 0s;
}

.dot-flashing::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #0EAA99;
  color: #0EAA99;
  animation: dot-flashing 1s infinite alternate;
  animation-delay: 1s;
}
</style>