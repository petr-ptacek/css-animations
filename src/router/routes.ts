import type { RouteRecordRaw } from 'vue-router';
import HomeView                from '@/views/Home.vue';
import { RouterNames }         from './routerNames';

const routes: RouteRecordRaw[] = [
  {
    name: RouterNames.Home,
    path: '/',
    component: HomeView
  },
  {
    name: RouterNames.CSSTransitionsBasics,
    path: '/css-transitions-basics',
    component: () => import('@/views/CSSTransitionsBasics.vue')
  }
];

export {
  routes
};