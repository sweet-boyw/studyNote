<template>
  <div class="container-register">
    <div class="register-box">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model.number="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注 册</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name:"register",
    data(){
        return{
            ruleForm:{
                phone:"",
                pass:"",
                checkPass:""
            },
            rules:{}
        }
    },
    methods:{
        submitForm(){
            this.$message({
                message:"注册成功，去登录",
                type:"success"
            })
            setTimeout(() => {
                this.$router.push('/login')
            }, 2000);
        }
    }
}
</script>
<style scoped>
.container-register{
    position: relative;
}
.register-box{
    width: 20em;
    height: 30em;
    position: absolute;
    top: 20em;
    left: 40%;
}
</style>