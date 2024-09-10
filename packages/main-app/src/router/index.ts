import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from "../views/home.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: `/apps`,
    component: () => import('@/views/apps/Frame.vue'),
    name: 'apps',
    children: [
      {
        path: 'pahtMatch(.*)*',
        component: () => import('@/views/apps/EmptyPage.vue'),
        name: 'subApp'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
