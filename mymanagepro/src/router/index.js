import Vue  from "vue";
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
    routes:[
        {
            path:'/login',
            component:()=>import('@/views/Login')
        },
        {
            path:'/home',
            component:()=>import('@/views/Home')
        }
    ],
    mode:'history'
})

router.beforeEach((to,from,next)=>{
    if(to.path === '/login') {return next()}
    const token = window.sessionStorage.getItem('Token')
    if(!token){
        next('/login')
    }else{
        next()
    }
})

export default router

// 第二种写法
// const routes = []
// const router = new VueRouter({
//     routes
// })

// export default router