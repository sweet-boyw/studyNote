
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        component:()=>import('@/views/Login')
    }
]

const router = new VueRouter({
    mode:'hash',
    routes
})

// 动态添加路由
router.addRoute({
    path:'/404',
    component:()=>import("@/views/Error")
})

// 前置路由守卫
router.beforeEach((to,from,next) =>{
    next()
    
})

export default router