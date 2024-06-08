<template>
  <nav class="navbar">
    <Header :pathName="route.name" />

    <div class="navbar__icon">
      <img src="/assets/images/globle.svg" alt="">
      <p>jobs.io</p>
    </div>

    <slot></slot>
  </nav>
</template>
  
<script setup lang='ts'>
const route = useRoute()
</script>
  
<style lang="scss" scoped>
.navbar {
  &__icon {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background-color: $green-100;
    position: fixed;
    overflow: hidden;
    width: 100%;
    top: 0;
    z-index: 1;
  }

  img {
    width: 35px;
    height: 35px;
  }

  p {
    font-size: 26px;
    color: #fff;
    font-weight: 700;
  }
}
</style>