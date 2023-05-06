import Vue  from "vue";
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
    routes:[
        {
            path:"*",
            redirect:"/login"
        },
        {
            path:'/login',
            component:()=>import('@/views/Login')
        },
        {
            path:'/register',
            component:()=>import("@/views/Login/register")
        },
        {
            path:"/lay",
            component:()=>import("@/views/LayOut"),
            children:[
                {
                    path:"home",
                    component:()=>import("@/views/page/Home")
                },
                {
                    path:"admin",
                    component:()=>import("@/views/manage/administrative")
                },
                {
                    path:"dict",
                    component:()=>import("@/views/manage/Dict")
                },
                {
                    path:"menu",
                    component:()=>import("@/views/manage/menu")
                },
                {
                    path:"user",
                    component:()=>import("@/views/manage/user")
                },
                {
                    path:"vmod",
                    component:()=>import("@/views/manage/Vmodule")
                },
                {
                    path:"role",
                    component:()=>import("@/views/manage/role")
                },
                {
                    path:"article",
                    component:()=>import("@/views/message/article")
                },
                {
                    path:"author",
                    component:()=>import("@/views/message/author")
                },
                {
                    path:"comment",
                    component:()=>import("@/views/message/comment")
                },
                {
                    path:"authority",
                    component:()=>import("@/views/control/authority")
                }
            ]
        }
    ]
})


export default router

// 第二种写法
// const routes = []
// const router = new VueRouter({
//     routes
// })

// export default router