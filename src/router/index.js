
import Vue from 'vue';
import VueRouter from 'vue-router';

//  home 模块路由
import router_home from './module_home';

Vue.use(VueRouter);

const routerList = [
    {
        path: '/',
        component: () => import('../template/home.vue')
    },
    ...router_home
]

const router = new VueRouter({
    routes: routerList
});

router.afterEach((to, from) => {

    //  全局页面标题设置
    document.title = to.meta.title || '全局 title 名称';
})

export default router;

