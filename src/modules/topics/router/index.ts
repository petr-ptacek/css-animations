import type { Router, RouteRecordRaw } from 'vue-router';
import ModuleComponent                 from '../Module.vue';

const moduleRoute: RouteRecordRaw = {
  path: '/topics',
  name: 'Topics',
  meta: {
    title: 'Topics'
  },
  component: ModuleComponent
};

function registerRoute(router: Router): void {
  router.addRoute(moduleRoute);
}

export {
  registerRoute,
  moduleRoute
};

export default registerRoute;