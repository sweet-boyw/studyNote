<!-- eslint-disable vue/no-deprecated-router-link-tag-prop -->
<template>
  <div class="login-container">
    <div class="login-tabs">
        <div class="welcome-word">
            <img src="@/assets/logo.png" alt="">
            <p>欢迎登录</p>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账户登录" name="first">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="userinfo">
                        <el-input type="password" v-model="ruleForm.userinfo" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="code" class="code-box">
                        <el-input v-model.number="ruleForm.code" class="code-input"></el-input>
                        <div style="display: inline-block;position: absolute;">
                            <img :src="imagedata" alt="" class="imageCode">
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="短信登录" name="second">
                <el-form :model="phoneruleForm" status-icon :rules="phonerules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" prop="code">
                        <el-input v-model.number="ruleForm.code" class="code-input" @blur="loginByPhone"></el-input><el-button @click="getCode" :disabled="codeBtnActive">{{ codeText }}</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="register">
            没有账号?
            <router-link to="register" tag="a">去注册</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import {getImgCode} from '@/api/user'
export default {
    name:"Login",
    data(){
        return{
            activeName:"first",
            rules:{},
            phonerules:{},
            ruleForm:{
                userinfo:'',
                password:'',
                code:''
            },
            phoneruleForm:{
                phone:"",
                code:""
            },
            imagedata:"", //验证码
            codeText:"获取验证码",
            codeBtnActive:false
        }
    },
    mounted(){
        this.getImgCode()
    },
    methods:{
        handleClick(tab,event){
            console.log(tab,event,this.activeName)
        },
        submitForm(){

        },
        submitPhoneForm(){

        },
        // 获取短信验证码--倒计时
        getCode(){
            if(!this.ruleForm.phone){
                this.$message({
                    message:"手机号不能为空",
                    type:"error"
                })
                return
            }else{
                let maxNum = 60
                let oldCodeText = this.codeText
                this.codeText = `${maxNum}s重新发送`
                let codeCountDown = setInterval(() => {
                    this.codeBtnActive = true
                    let countDownNum =  --maxNum
                    this.codeText = `${countDownNum}s重新发送`
                    if(countDownNum == 0){
                        this.codeText = oldCodeText
                        clearInterval(codeCountDown)
                        this.codeBtnActive = false
                    }
                }, 1000);
            }
        },
        // 获取图片验证码
        getImgCode(){
            getImgCode().then(res =>{
                // console.log(res)
                this.imagedata = res.data.body.image
            })
        },
        loginByPhone(){
            this.$router.push("/lay/home")
        }
    }
}
</script>

<style lang="css" scoped>
@import url('./login.css');
</style>