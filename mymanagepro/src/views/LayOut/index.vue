<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="container">
    <div class="nav-left">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" class="logo-image">
        Jiang Manage
      </div>
      <div class="nav-list">
          <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="div" :class="{clk: item.path == djindex}" class="icon-class" @click.native="clkStyle(item.path)">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="board">
      <div class="top-nav">
        <div class="flod-btn">
          <i class="el-icon-s-fold"></i>
        </div>
        <div class="control-board">
          <div class="topIcon"><i class="el-icon-eleme"></i></div>
          <div class="topIcon">
            <el-badge :value="200" :max="99" class="item">
              <i class="el-icon-user"></i>
            </el-badge>
          </div>
          <div class="topIcon"><i class="el-icon-setting"></i></div>
          <div class="topIcon">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="topIcon">Jiang</div>
          <div class="topIcon dropdown">
            <el-dropdown>
              <span class="el-dropdown-link">
                中文<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>中文</el-dropdown-item>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Français</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="topIcon"><i class="el-icon-more-outline"></i></div>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"layOut",
  data(){
    return{
      list:[
        {path:'/lay/home',name:"首页",icon:"el-icon-s-home"},
        {path:'/lay/menu',name:"菜单管理"},
        {path:'/lay/role',name:"角色管理"},
        {path:'/lay/admin',name:"行政区划"},
        {path:'/lay/dict',name:"字典管理"},
        {path:'/lay/vmod',name:"模块管理"},
        {path:'/lay/comment',name:"评论管理"},
        {path:'/lay/article',name:"文章管理"},
        {path:'/lay/author',name:"作者管理"},
        {path:'/lay/authority',name:"权限控制"}
      ],
      djindex:0
    }
  },
  mounted(){
    // 根据路由确定游标位置
    const path = this.$route.path
    this.djindex = path
  },
  methods:{
    clkStyle(path){
      this.djindex = path
    }
  }
}
</script>

<style scoped>
.container{
  background-color: #f1f2f6;
}
.nav-left{
  float: left;
  width: 20em;
  height: 100vh;
  background-color: #02142a;
  color: #fff;
}
.top-nav{
  width:100%;
  height: 5em;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content{
  width: 95%;
  height: 80vh;
  margin: 40px;
  /* background-color: #fff; */
  /* border-radius: 15px; */
  overflow-y: auto;
  /* padding: 35px; */
}
.board{
  margin-left: 20em;
  height: 100vh;
}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  line-height: 3em;
  font-size: 1.8em;
  font-weight: 500;
  color: #fff;
  padding: 10px;
}
.logo-image{
  width: 2em;
}

.icon-class{
  cursor: pointer;
  width: 100%;
  height: 3em;
  line-height: 3em;
  padding-left:  3em;
  font-size: larger;
  font-weight: 500;
}
.clk{
  background: #f1f2f6;
  color: #02142a;
  transition: 1.5s;
}

.flod-btn{
  width: 100px;
  margin: 10px;
  text-align: left;
}
.control-board{
  display: flex;
}
.topIcon{
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin: 10px;
  font-size: 20px;
  text-align: center;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
}
.topIcon .dropdown{
  color: #184173;
}
</style>