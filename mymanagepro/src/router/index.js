import Vue  from "vue";
import Router from 'vue-router'
// import Error from '@/views/Error'

Vue.use(Router)

const router =  new Router({
    routes:[
        {
            path:'/login',
            component:()=>import('@/views/Login')
        },
        {
            path:'/home',
            component:()=>import('@/views/page/Home.vue')
        }
    ],
    mode:'history'
})

// 动态添加单个路由
// router.addRoute({
//     path:'/404',
//     component:Error
// })


router.beforeEach((to,from,next)=>{
    if(to.path === '/login') {return next()}
    const token = window.sessionStorage.getItem('Token')
    const Nroutes = [] // 存储在Vuex里面的动态路由list
    if(!token){
        next('/login')
    }else{
        Nroutes.forEach(v =>{
            v.children = addChindren(v.children)
            v.component = routerCom(v.component)
            router.addRoutes(v)
        })
        next()
    }
})

function addChindren(children){
    children.forEach(v => {
        v.component = routerCom(v.component);
        if (v.children != undefined) {
            v.children = addChindren(v.children)
        }
    })
    return children
}

function routerCom(path){
    return (resolve) => require([`@/views/${path}`], resolve); // 不是很理解
    // return `()=>import('${path}')` // 没试验不知道可不可以
}

export default router

// 第二种写法
// const routes = []
// const router = new VueRouter({
//     routes
// })

// export default router