<template>
  <AppHeader />
  <main class="app-content">
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup>
import AppHeader from '@/common/components/AppHeader.vue';
</script>