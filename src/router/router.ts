import type {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext
}                                         from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { routes }                         from './routes';
import { setPageTitle }                   from './middlewares';

const router: Router = createRouter({
  strict: import.meta.env.PROD,
  history: createWebHistory(),
  routes
});

router.beforeEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      setPageTitle(to, from, next);
    }
);

export { router };