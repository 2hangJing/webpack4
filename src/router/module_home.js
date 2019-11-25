function asyncComponents(name, path= '../template/'){

    return ()=> import(/* webpackChunkName: "[request]" */ `../template/${name}.vue`);
}

export default [
    {
        path: '/home',
        name: 'home',
        component: asyncComponents('home'),
        meta: {
            title: '首页'
        }
    }
]