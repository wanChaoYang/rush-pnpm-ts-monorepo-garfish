import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from "../views/login.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: `/apps`,
    component: () => import('@/views/apps/Frame.vue'),
    name: 'apps',
    children: [
      {
        path: ':pahtMatch(.*)*',
        component: () => import('@/views/apps/EmptyPage.vue'),
        name: 'subApp'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  strict: true
});

export default router;
