<template>
  <div class="textfield">
    <input v-model="inputValue" placeholder="Escreva o seu nome" class="textfield__input" :type="type" />
  </div>
</template>

<script setup lang='ts'>
const inputValue = ref<string>(null)

type Props = {
  type?: string
}

const props = defineProps<Props>()
</script>

<style></style>