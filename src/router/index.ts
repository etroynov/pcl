import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import DefaultLayout from '@/pages/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      layout: DefaultLayout,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
