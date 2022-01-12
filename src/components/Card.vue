<template>
  <div class="card">
    <h1 class="card__heading">
      {{ heading }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
interface ICardProps {
  heading?: string;
}

const { heading } = defineProps<ICardProps>();
</script>