<template>
    <div>
      <h3>{{name}}</h3>
      <h4>{{age}}</h4>
      <button @click="sayHello">sayHello</button>
    </div>
</template>
<script>
export default {
  name:"app",
  setup(){
    let name = "sweet"
    let age = 18
    function sayHello(){
      console.log("hello vue3")
    }
    // 返回一个对象
    return{
      name,
      age,
      sayHello
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
