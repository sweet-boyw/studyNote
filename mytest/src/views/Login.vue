<template>
  <div class="container">
    <h1>welcom to login</h1>
    <h3>{{ name }}</h3>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    name:"Login",
    setup(){
        const data = reactive({
            name:"log"
        })
        return{
            ...toRefs(data)
        }
    }
}
</script>

<style>

</style>