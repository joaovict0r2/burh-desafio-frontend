<template>
  <div class="header">
    <div class="header__text">
      <h2>
        Discover the best remote jobs to work from home
      </h2>
      <p>Browse thousands of remote job listings to work at startups and leading companies.</p>
    </div>

    <CButton text="Publicar uma vaga" mode="transparent" height="40px" width="100%" />
  </div>
</template>
  
<script setup lang='ts'>
  
</script>
  
<style lang="scss" scoped>
.header {
  padding: 20px 16px 20px 16px;
  background-color: $green-100;
  color: #fff;

  &__text {
    margin-bottom: 20px;
  
    h2 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 16px;
    }
  
    p {
      font-size: 16px;
    }
  }
}
</style>