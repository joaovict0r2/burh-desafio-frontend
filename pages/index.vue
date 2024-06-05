<template>
  <div class="checkin">
    <div class="checkin__cover">
      <h2>Introduce Your Product Quickly & Effectively</h2>
      <p>Millions of businesses of all sizes — from startups to large enterprises — use this product to accept payments,
        send payouts, and manage their businesses online.</p>

      <div class="checkin__signin">
        <TextField placeholder="Entre com o seu nome" v-model="formData.name" @change="v$.name.$touch"
          :error="isInputEmpty" />
        <CButton text="Entrar" :width="'120px'" @click="signin" />
      </div>
    </div>

    <div class="checkin__banner">
      <img src="/assets/images/cover-image.jpg" alt="banner">
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useUserStore } from '../store/UserStore'

const userStore = useUserStore()
const isInputEmpty = ref<boolean>()

const formData = reactive({ name: '' })
const rules = { name: { required } }

const v$ = useVuelidate(rules, formData)

async function signin() {
  const isFormValid = await v$.value.$validate()

  if (!isFormValid) {
    isInputEmpty.value = true
    return
  }

  userStore.signin({ name: formData.name })
}
</script>

<style lang="scss" scoped>
.checkin {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 40px 0 40px;

  @include lg {
    display: grid;
    grid-template-columns: minmax(600px, 500px) 1fr;
    justify-items: end;
  }

  &__cover {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;

    h2 {
      font-size: 60px;
      font-weight: 700;
    }

    p {
      margin-top: 16px;
    }
  }

  &__signin {
    width: 500px;
    display: flex;
    gap: 6px;
    margin-top: 20px;
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