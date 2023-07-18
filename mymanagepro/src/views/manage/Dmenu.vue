<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<template>
  <div class="menu-container">
    <div class="btn-box">
      <div class="input-box">
        <el-form ref="menuform" :model="menuform" label-width="100px" class="menuform">
          <el-form-item label="菜单名称：">
            <el-input v-model="menuform.name" class="el-input"></el-input>
          </el-form-item>
          <el-form-item label="菜单类型：">
            <el-select v-model="menuform.type"  placeholder="请选择">
              <el-option label="菜单" value="1"></el-option>
              <el-option label="按钮" value="2"></el-option>
              <el-option label="路由" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜单权限：">
            <el-select v-model="menuform.role"  placeholder="请选择">
              <el-option label="管理员" value="1"></el-option>
              <el-option label="普通操作员" value="2"></el-option>
              <el-option label="系统操作员" value="3"></el-option>
              <el-option label="测试管理员" value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="button-b">
        <el-button type="success" icon="el-icon-plus" circle></el-button>
      </div>
    </div>
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
      menulist:[],
      menuform:{
        name:"",
        type:"",
        role:""
      }
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
.btn-box{
  width: 100%;
  height: 10em;
  background-color: #fff;
  margin-bottom: 20px;
}
.input-box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .menuform{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .el-input{
    width: 300px;
  }
</style>