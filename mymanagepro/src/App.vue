<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  watch:{
    "$route":{
      handler(){
        console.log("路由变化了~")
      }
    }
  }
}
</script>

<style>

</style>
