/*
* author: the.one
*
* time: 2021-03-18
*
* desc: 路由管理
*
* */
import Vue from 'vue';
import Router from 'vue-router';
import RouterMeta from '@/utils/router/router';
Vue.use(Router);


const routes = [
    {
        path: '/',
        redirect: '/',
    },
    {
        path: '*',
        name: '404',
        redirect: '/',
    },
];
const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => RouterMeta(to, from, next));

export default router;
