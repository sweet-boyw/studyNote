<template>
  <div class="container">
    <h1>hello Vue3</h1>
    <h3>{{ name }}</h3>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
    name:"Home",
    setup(){
        const data = reactive({
            name:"mart"
        })
        return{
            ...toRefs(data)
        }
    }
}
</script>

<style>

</style>