<template>
  <nav class="navbar">
    <NuxtLink class="navbar__icon" to="/jobs">
      <img src="/assets/images/globle.svg" alt="">
      <p>jobs.io</p>
    </NuxtLink>

    <Header :pathName="route.name" />

    <div class="navbar__content">
      <div class="navbar__wrapper">
        <slot></slot>
      </div>
    </div>
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
    text-decoration: none;
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

  &__content {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__wrapper {
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    
    @include rwd(1200) {
      margin-top: 20px;
      padding: 0;
    }
  }
}
</style>