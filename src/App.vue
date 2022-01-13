<template>
  <AppHeader />
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import AppHeader from '@/common/components/AppHeader.vue';
</script>

<style lang="scss" scoped>
.content {
  padding: 2rem 0;
}
</style>