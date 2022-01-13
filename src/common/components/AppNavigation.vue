<template>
  <nav class="navigation">
    <router-link v-show="isVisibleLinkBack" class="navigation__link navigation__link--back link" to="/">
      <span class="navigation__link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18" />
        </svg>
      </span>
      <span class="navigation__link-title">
        BACK
      </span>
    </router-link>

    <div class="navigation__route-title">
      {{ routeTitle }}
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { computed }    from 'vue';
import { useRoute }    from 'vue-router';
import { RoutesNames } from '@/router';

const route = useRoute();

const routeTitle = computed(() => route.meta.title);
const isVisibleLinkBack = computed(() => route.name !== RoutesNames.Home);
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
}

.navigation__route-title {
  font-size: 3.5rem;
}

.navigation__link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  font-size: 2rem;
}

.navigation__link-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5rem;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.navigation__link--back {
  font-size: 1.2rem;
}
</style>