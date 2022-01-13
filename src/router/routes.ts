import type { RouteRecordRaw } from 'vue-router';
import HomeView                from '@/views/Home.vue';
import { RoutesNames }         from './routesNames';

const routes: RouteRecordRaw[] = [
  {
    name: RoutesNames.Home,
    path: '/',
    component: HomeView,
    meta: {
      title: 'CSS Animations'
    }
  },
  {
    name: RoutesNames.CSSTransitionsBasics,
    path: '/css-transitions-basics',
    component: () => import('@/views/topics/TransitionsBasics.vue'),
    meta: {
      title: 'Transitions Basics'
    }
  }
];

export {
  routes
};