<template>
    <div id="app">
      <Demo-2/>
    </div>
</template>
<script>
import Demo2 from './components/Demo2.vue'
export default {
  name:"app",
  components:{Demo2},
  setup(){
    return{
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
