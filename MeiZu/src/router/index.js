import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

import container from '../components/container/container.vue'
import parts from '../components/container/parts'
import dingdan from '../components/dingdan'
const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/container"
    },
    {
        path: '/parts',
        component: parts
    },{
        path:'/container',
        component:container
    },
    {
        path:'/dingdan',
        component:dingdan
    }
]

// 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;