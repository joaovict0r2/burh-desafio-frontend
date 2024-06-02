<template>
  <div class="checkin">
    <div class="checkin__cover">
      <h2>Introduce Your Product Quickly & Effectively</h2>
      <p>Millions of businesses of all sizes — from startups to large enterprises — use this product to accept payments,
        send payouts, and manage their businesses online.</p>
    </div>

    <div class="checkin__banner">
      <img src="/assets/images/cover-image.jpg" alt="banner">
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
@import '../assets/css/animations/slide-in.scss';

.checkin {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 40px 0 40px;

  @include lg {
    display: grid;
    grid-template-columns: minmax(600px, 500px) 1fr;
  }

  &__cover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // margin-left: 40px;

    h2 {
      font-size: 60px;
      font-weight: 700;

      @include lg {
        width: 500px;
      }
    }

    p {
      margin-top: 16px;

      @include lg {
        width: 500px;
      }
    }
  }

  &__banner {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: none;
      transition: all 2s ease-out;

      @include lg {
        display: block;
        width: 50%;
      }
    }
  }
}
</style>