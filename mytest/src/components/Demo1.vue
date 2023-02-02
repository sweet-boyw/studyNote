<template>
    <div id="demo1">
      <h3>一个人的信息</h3>
      <h4 v-show="person.name">姓名：{{person.name}}</h4>
      <h4>年龄{{person.age}}</h4>
      <h4 v-show="person.sex">性别：{{ person.sex }}</h4>
      <h3>工作信息</h3>
      <h4>工作类型：{{ person.job.type }}</h4>
      <h4>薪资：{{ person.job.salary }}</h4>
      <h3>爱好</h3>
      <ul>
        <li v-for="(l,index) in person.hobby" :key="index">{{ l }}</li>
      </ul>
      <button @click="sayHello">sayHello</button>
      <br>
      <button @click="changeInfo">修改信息</button>
      <br>
      <button @click="addSex">添加一个sex属性</button>
      <br>
      <button @click="deleteName">删除一个name属性</button>
    </div>
</template>
<script>
import { reactive} from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"demo1",
  setup(){
    // let name = ref("sweet")
    // let age = ref(18)
    // let job = reactive({
    //   type:"前端工程师",
    //   salary:"30k"
    // })
    let person = reactive({
      name:"sweet",
      age:18,
      job:{
        type:"前端工程师",
        salary:"30k"
      },
      bobby:['游泳','下棋','唱歌']
    })
    // let hobby = reactive(['游泳','下棋','唱歌'])
    function sayHello(){
      console.log("hello vue3")
    }
    function changeInfo(){
      person.name = 'Bob'
      person.age = 22
      person.job.type = "后端工程师"
      person.job.salary = "40k"
      person.hobby[0] = '抽烟' // vue2中通过下标修改数组数据页面不会发生改变
    }
    function addSex(){
      person.sex = "男"
    }
    function deleteName(){
      delete person.name
    }
    // 返回一个对象
    return{
      // name,
      // age,
      // job,
      person,
      // hobby,
      sayHello,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
