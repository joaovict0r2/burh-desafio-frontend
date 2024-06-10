<template>
  <section>
    <button
      class="filter"
      :class="{ 'filter--active': isFilterOpened }"
      @click="toggleFilterState"
    >
      <div class="filter__field">
        <p>{{ label }}</p>
        <img
          alt="arrow icon"
          src="/assets/images/small-down.svg"
          class="filter__icon"
          :class="{'filter__icon--active': isFilterOpened }"
        >
      </div>
    </button>

    <div class="filter__content" v-if="isFilterOpened">
      <slot name="content"></slot>
    </div>
  </section>
</template>
  
<script setup lang='ts'>
defineProps({
  label: String
})

const isFilterOpened = ref(false)

function toggleFilterState() {
  isFilterOpened.value = !isFilterOpened.value
}
</script>
  
<style lang="scss" scoped>
.filter{
  position: relative;
  background-color: transparent;
  border: 1px solid $gray-100;
  border-radius: 25px;
  padding: 0;
  transition: all 0.3s;
  cursor: pointer;

  &--active {
    border: 1px solid $green-300;
  }

  &__field {
    display: flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 25px;
    background-color: #0eaa991c;
    gap: 4px;

    p {
      font-size: 12px;
      line-height: 100%;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  &__icon {
    width: 14px;
    height: 14px;
    transition: all .2s ease;

    &--active {
      transform: rotate(-180deg);
    }
  }

  &__content {
    position: absolute;
    background-color: $gray-100;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    border-radius: 8px;
    margin-top: 10px;
    z-index: 1;
  }
}
</style>