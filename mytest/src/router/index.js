// vue3的路由写法
import {createRouter,createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history:routerHistory,
    routes:[
        {
            psth:"*",
            redirect:'/login'
        },
        {
            path:'/login',
            name:"Login",
            component:()=>import("@/views/Login"),
            meta:{
                title:"登录"
            }
        },
        {
            path:'/layout',
            name:'layOut',
            component:()=>import('@/views/layOut'),
            redirect:'/layout/index',
            children:[
                {
                    path:'/layout/index',
                    name:"Home",
                    component:()=>import('@/views/Page/Home.vue'),
                    meta:{
                        title:"首页"
                    }
                }
            ]
        }
    ]
})
export default router