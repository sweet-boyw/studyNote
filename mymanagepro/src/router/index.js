import Vue  from "vue";
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/home',
            component:()=>import('@/views/Home')
        }
    ],
    mode:'history'
})

// 第二种写法
// const routes = []
// const router = new VueRouter({
//     routes
// })

// export default router