<template>
  <div class="role-container">
    <div class="four-cards">
      <div class="crad-item" v-for="item in cards" :key="item.id">
        <el-card shadow="hover" :body-style="{ width: '17em' }">
          <i ></i>
          <span>{{ item.title }}</span>
          <span>{{ item.num }}</span>
        </el-card>
      </div>
    </div>
    <div id="echart-board"></div>
  </div>
</template>

<script>
import { roleDraw } from '@/utils/echarts'
export default {
    name:"Role",
    data(){
        return{
            cards:[
              {id:1,title:'待办事项',num:12,icon:''},
              {id:2,title:'系统消息',num:12,icon:''},
              {id:3,title:'代码量',num:12,icon:''},
              {id:4,title:'天气预报',num:12,icon:''},
            ]
        }
    },
    mounted(){
      let thChartid = document.getElementById('echart-board')
      roleDraw(thChartid)
    },
    methods:{

    }
}
</script>

<style scoped>
.four-cards{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
}
.crad-item{
  margin: 10px;
  width: 20em;
}
#echart-board{
  margin: 10px;
  width: 68em;
  height: 20em;
  background: #fff;
}
</style>