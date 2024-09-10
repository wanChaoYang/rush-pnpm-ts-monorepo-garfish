import {  RouteRecordRaw } from 'vue-router';
import Home from "../views/home.vue";
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
];

export default routes;
