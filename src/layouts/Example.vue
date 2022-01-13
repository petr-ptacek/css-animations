<template>
  <section class="example">
    <h2 class="example__heading heading-secondary">
      <slot name="heading" />
    </h2>

    <div class="example__content">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.example {
  padding: 2rem;
  background-color: var(--color-black-2);
  border-radius: 4px;
}

.example__heading {
  margin-bottom: 1.4rem;
}
</style>