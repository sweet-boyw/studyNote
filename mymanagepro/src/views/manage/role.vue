<template>
  <div class="role-container">
    <div class="four-cards">
      <div class="crad-item" v-for="item in cards" :key="item.id">
        <el-card shadow="hover" :body-style="{ width: '17em' }">
          <i :class="item.icon" class="icon" :style="{color:item.color}"></i>
          <span>{{ item.title }}:</span>
          <span>{{ item.num }}</span>
        </el-card>
      </div>
    </div>
    <div class="chart-notices">
      <div id="echart-board"></div>
      <div class="notices-board">
        <div class="infomations">

        </div>
        <div class="notices"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { roleDraw } from '@/utils/echarts'
export default {
    name:"Role",
    data(){
        return{
            cards:[
              {id:1,title:'待办事项',num:128,icon:'el-icon-setting',color:'#f56c6c'},
              {id:2,title:'系统消息',num:10,icon:'el-icon-folder-opened',color:'#e6a44a'},
              {id:3,title:'代码量',num:999,icon:'el-icon-receiving',color:'#67c34c'},
              {id:4,title:'天气预报',num:28,icon:'el-icon-sunrise-1',color:'#409eff'},
            ],
            datevalue:new Date()
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
  width: 69em;
  height: 40em;
  background: #fff;
}
.chart-notices{
  display: flex;
  justify-content: space-between;
}
.infomations{
  width: 20em;
  height: 19em;
  margin: 10px;
  background-color: #8fc9fb;
}
.notices{
  width: 20em;
  height: 19em;
  margin: 10px;
  background-color: #f797d6;
}

.icon{
  width: 50px;
  height: 50px;
  font-size: 30px;
  padding: 10px;
}
</style>