// router.js (Vue 3)
import { createRouter, createWebHistory } from 'vue-router';
import home from '../view/home.vue';
import end from '../view/end/index.vue'

const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    // 首页 模块默认加载 其他模块动态加载
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    // 其他路由
    {
        path: '/end',
        name: 'end',
        component: end,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
   