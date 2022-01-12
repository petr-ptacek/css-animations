<template>
  <section class="topics">
    <h1 class="heading-primary">
      Topics
    </h1>

    <div class="topics__list">
      <router-link to="/">
        <Card class="topic" heading="Transitions Basic" />
      </router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Card } from '@/components';
</script>