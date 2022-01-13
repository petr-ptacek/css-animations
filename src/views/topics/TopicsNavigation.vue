<template>
  <div class="topic__items">
    <router-link to="css-transitions-basics" class="link topic__item">
      CSS Transitions Basics
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.topic__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  gap: 1rem;
}

.topic__item {
  padding: 2rem;
  font-size: 2rem;
  background-color: var(--color-black-2);
}
</style>