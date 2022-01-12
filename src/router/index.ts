import type { Router }                    from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { routes }                         from './routes';

const router: Router = createRouter({
  strict: import.meta.env.PROD,
  history: createWebHistory(),
  routes
});

export { router };