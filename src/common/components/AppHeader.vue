<template>
  <header class="header">
    <AppNavigation />
  </header>
</template>

<script setup lang="ts">
import AppNavigation from './AppNavigation.vue';
</script>

<style scoped lang="scss">

.header {
  padding: 1rem 2rem;
  background-color: var(--color-black-2);

  display: flex;
  justify-content: center;
}
</style>