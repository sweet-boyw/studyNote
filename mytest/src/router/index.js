// vue3的路由写法
import {createRouter,createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history:routerHistory,
    routes:[
        {
            path:'/home',
            component:()=>import('@/views/Home')
        }
    ]
})
export default router