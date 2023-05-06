<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<template>
  <div class="menu-container">
    <el-table
    :data="menulist"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="number"
      label="菜单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="菜单名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="菜单类型"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.type === 'M' ? '菜单' :'按钮' }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间"
      width="240">
    </el-table-column>
    <el-table-column
      prop="role"
      label="菜单权限"
      width="180"
      :filters="[{ text: '管理员', value: 'M' }, { text: '操作员', value: 'H' }]"
      :filter-method="filterTag"
      >
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.role === 'M' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.role === 'M' ? '管理员':'操作员'}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="handleway"
      label="操作"
      align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
        <el-button size="mini" type="success" @click="handleChangRole(scope.$index,scope.row)">权限修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {getMenuList} from '@/api/menu'
export default {
  name:"menu",
  data(){
    return{
      menulist:[]
    }
  },
  mounted(){
    getMenuList().then(res =>{
      console.log(res)
      this.menulist = res.data.data
    })
  },
  methods:{
    tableRowClassName(row,rowIndex){
      console.log(row,rowIndex)
    },
    filterTag(value, row) {
        return row.tag === value;
      },
    handleDelete(){
      console.log("删除")
    },
    // 权限修改
    handleChangRole(){
      console.log("修改权限")
    }
  }
}
</script>

<style scoped>
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>