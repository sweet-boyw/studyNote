<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
    <div class="container">
        <div class="site-nav">
            <div class="top-left nav">
                <div class="left-link" v-for="(item,index) in leftNavList" :key="index">
                    <router-link :to="item.toLink" tag="a">{{ item.name }}</router-link>
                </div>
            </div>
            <div class="top-right nav">
                <div class="right-link" v-for="(item,index) in rightNavList" :key="index">
                    <router-link :to="item.toLink" tag="a">{{ item.name }}</router-link>
                </div>
            </div>
        </div>
        <div class="lego1-wrap">
            <div class="search-nav"></div>
            <div class="display-nav"></div>
        </div>
    </div>
</template>
<script>
import {citys} from "@/assets/city"
export default {
    data(){
        return{
            leftNavList:[{
                name:"天津",
                toLink:""
            },{
                name:"亲，请登录",
                toLink:""
            },{
                name:"免费注册",
                toLink:""
            },{
                name:"手机逛淘宝",
                toLink:""
            },{
                name:"网页无障碍",
                toLink:""
            }],
            rightNavList:[{
                name:"淘宝网首页",
                toLink:""
            },{
                name:"我的淘宝",
                toLink:""
            },{
                name:"购物车",
                toLink:""
            },{
                name:"收藏夹",
                toLink:""
            },{
                name:"商品分类",
                toLink:""
            },{
                name:"免费开店",
                toLink:""
            },{
                name:"千牛卖家中心",
                toLink:""
            },{
                name:"联系客服",
                toLink:""
            }],
            citys:[...citys],
            cityDefaultValue:"天津"
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.container{
    height: 100vh;
    background-color: #f6f6f6;
    position: relative;
}
.site-nav{
    height: 35px;
    border-bottom: 1px solid #bbb;
    display: flex;
}
.lego1-wrap{
    width: 1190px;
    height: calc(100% - 35px);
    margin: 0 auto;
    background-color: aquamarine;
}
.nav{
    display: flex;
    width: 50%;
    height: 35px;
    line-height: 35px;
}
.top-left{
    float: right;
    padding-right: 50px;
}
.top-right{
    float: left;
    padding-left: 50px;
}
.left-link,.right-link{
    a{
        color: #c6c6c6;
        padding: 0  10px;
        font-size: 12px;
    }
    a:hover{
        color: #f22e00;
    }
}
</style>