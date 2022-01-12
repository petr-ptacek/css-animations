import type { RouteRecordRaw } from 'vue-router';
import HomeView                from '@/views/Home.vue';
import { RouterNames }         from './routerNames';

const routes: RouteRecordRaw[] = [
  {
    name: RouterNames.Home,
    path: '/',
    component: HomeView
  }
];

export {
  routes
};