<template>
  <div class="checkin">
    <div class="checkin__cover">
      <h2>Apresente seu produto de forma rápida e eficaz</h2>
      <p>Milhões de empresas de todos os tamanhos — desde startups até grandes empresas — usam este produto para cadastro de vagas, compartilhar vagas e gerenciar suas metas.</p>

      <div class="checkin__signin">
        <TextField placeholder="Entre com o seu nome" v-model="form.name"
          :animated-error="isInputEmpty" />
        <CButton :width="'120px'" @click="signin">
          Entrar
        </CButton>
      </div>
    </div>

    <div class="checkin__banner">
      <img src="/assets/images/cover-image.jpg" alt="banner">
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { useUserStore } from '../store/UserStore'
import * as z from 'zod'

const userStore = useUserStore()
const isInputEmpty = ref<boolean>()
const form = reactive({ name: '' })

const formSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório'})
})

async function signin() {
  const validSchema = formSchema.safeParse(form)

  if (!validSchema.success) {
    isInputEmpty.value = true
    return
  } 

  userStore.signin({ name: form.name })
  localStorage.setItem('app/username', form.name)
}
</script>

<style lang="scss" scoped>
.checkin {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 100%;
    max-width: 500px;

    h2 {
      font-size: 40px;
      font-weight: 700;

      @include lg {
        font-size: 60px
      }
    }

    p {
      margin-top: 16px;
    }
  }

  &__signin {
    width: 100%;
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

      @include rwd(1200) {
        display: block;
        width: 50%;
      }
    }
  }
}
</style>