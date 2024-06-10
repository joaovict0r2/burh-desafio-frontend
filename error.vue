<template>
  <div class="error">
    <img src="/assets/images/404.jpg" alt="not found">
    <h2>Acho que você está perdido!</h2>
    <p>Desculpe, mas está pagina que tentou acessar, não existe.</p>

    <CButton height="50px" @click="handleError">
      Volte para o inicio
    </CButton>
  </div>
</template>

<script setup>
  const error = useError();

  const handleError = () => {
    clearError({
      redirect: '/',
    });
  };
</script>

<style lang="scss" scoped>
.error {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  img {
    width: 70%;

    @include sm {
      width: 50%;
    }

    @include md {
      width: 30%;
    }
  }

  h2 {
    margin-top: 40px;
    font-size: 30px;
  }

  p {
    margin-top: 4px;
  }

  button {
    margin-top: 30px;
    width: 100%;
    
    @include sm {
      max-width: 200px;
    }
  }
}
</style>
