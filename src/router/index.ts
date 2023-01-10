import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/Default.vue';
import AuthLayout from '@/layouts/Auth.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/subscriptions',
    name: 'Subscription',
    component: () => import('@/pages/Subscriptions.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/licenses',
    name: 'License',
    component: () => import('@/pages/Licenses.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('@/pages/Clients.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/pages/Groups.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('@/pages/Devices.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/Settings.vue'),
    meta: { layout: DefaultLayout },
  },
  {
    path: '/changelog',
    name: 'Changelog',
    component: () => import('@/pages/Changelog.vue'),
    meta: { layout: DefaultLayout },
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register.vue'),
    meta: { layout: AuthLayout },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { layout: AuthLayout },
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
