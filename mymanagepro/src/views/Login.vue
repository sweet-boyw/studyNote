<template>
  <div class="login">
    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="css" scoped>
.login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
label{
    color: #000;
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #3E1E68;
    overflow: hidden;
}

.background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #E45A84;
    top: 98%;
    left: 69%;
    animation-duration: 51s;
    animation-delay: -13s;
    transform-origin: -9vw -12vh;
    box-shadow: 40vmin 0 5.666372018770642vmin currentColor;
}
.background span:nth-child(1) {
    color: #FFACAC;
    top: 38%;
    left: 25%;
    animation-duration: 29s;
    animation-delay: -17s;
    transform-origin: -18vw -20vh;
    box-shadow: -40vmin 0 5.543197714550935vmin currentColor;
}
.background span:nth-child(2) {
    color: #1b7c9a;
    top: 67%;
    left: 81%;
    animation-duration: 51s;
    animation-delay: -39s;
    transform-origin: 0vw -5vh;
    box-shadow: -40vmin 0 5.575881068480409vmin currentColor;
}
.background span:nth-child(3) {
    color: #E45A84;
    top: 42%;
    left: 32%;
    animation-duration: 40s;
    animation-delay: -40s;
    transform-origin: -5vw -17vh;
    box-shadow: -40vmin 0 5.747753140699433vmin currentColor;
}
.background span:nth-child(4) {
    color: #583C87;
    top: 92%;
    left: 90%;
    animation-duration: 37s;
    animation-delay: -33s;
    transform-origin: -1vw -12vh;
    box-shadow: 40vmin 0 5.091969387198048vmin currentColor;
}
.background span:nth-child(5) {
    color: #1b7c9a;
    top: 86%;
    left: 65%;
    animation-duration: 14s;
    animation-delay: -24s;
    transform-origin: 2vw 14vh;
    box-shadow: -40vmin 0 5.0724058556136775vmin currentColor;
}
.background span:nth-child(6) {
    color: #E45A84;
    top: 1%;
    left: 95%;
    animation-duration: 42s;
    animation-delay: -47s;
    transform-origin: 11vw -20vh;
    box-shadow: -40vmin 0 5.624679469935427vmin currentColor;
}
.background span:nth-child(7) {
    color: #1b7c9a;
    top: 97%;
    left: 98%;
    animation-duration: 22s;
    animation-delay: -42s;
    transform-origin: 10vw -23vh;
    box-shadow: 40vmin 0 5.3251217552015415vmin currentColor;
}
.background span:nth-child(8) {
    color: #1b7c9a;
    top: 66%;
    left: 96%;
    animation-duration: 38s;
    animation-delay: -24s;
    transform-origin: -10vw -20vh;
    box-shadow: -40vmin 0 5.3763091845589415vmin currentColor;
}
.background span:nth-child(9) {
    color: #1b7c9a;
    top: 86%;
    left: 1%;
    animation-duration: 8s;
    animation-delay: -50s;
    transform-origin: -15vw -16vh;
    box-shadow: 40vmin 0 5.373451155053156vmin currentColor;
}
.background span:nth-child(10) {
    color: #FFACAC;
    top: 60%;
    left: 61%;
    animation-duration: 10s;
    animation-delay: -27s;
    transform-origin: 17vw 1vh;
    box-shadow: -40vmin 0 5.150975400920394vmin currentColor;
}
.background span:nth-child(11) {
    color: #583C87;
    top: 53%;
    left: 67%;
    animation-duration: 53s;
    animation-delay: -24s;
    transform-origin: 15vw -13vh;
    box-shadow: -40vmin 0 5.9147384281778335vmin currentColor;
}
.background span:nth-child(12) {
    color: #1b7c9a;
    top: 82%;
    left: 66%;
    animation-duration: 24s;
    animation-delay: -33s;
    transform-origin: -14vw -13vh;
    box-shadow: 40vmin 0 5.867573957474817vmin currentColor;
}
.background span:nth-child(13) {
    color: #583C87;
    top: 65%;
    left: 96%;
    animation-duration: 38s;
    animation-delay: -43s;
    transform-origin: 6vw -6vh;
    box-shadow: -40vmin 0 5.444339955611142vmin currentColor;
}
.background span:nth-child(14) {
    color: #E45A84;
    top: 98%;
    left: 77%;
    animation-duration: 24s;
    animation-delay: -33s;
    transform-origin: 4vw 3vh;
    box-shadow: -40vmin 0 5.288847248659195vmin currentColor;
}
.background span:nth-child(15) {
    color: #E45A84;
    top: 30%;
    left: 83%;
    animation-duration: 18s;
    animation-delay: -39s;
    transform-origin: -2vw -22vh;
    box-shadow: -40vmin 0 5.013305245269063vmin currentColor;
}
.background span:nth-child(16) {
    color: #583C87;
    top: 6%;
    left: 68%;
    animation-duration: 24s;
    animation-delay: -37s;
    transform-origin: -1vw -16vh;
    box-shadow: -40vmin 0 5.765910933675196vmin currentColor;
}
.background span:nth-child(17) {
    color: #583C87;
    top: 84%;
    left: 59%;
    animation-duration: 13s;
    animation-delay: -4s;
    transform-origin: -6vw -4vh;
    box-shadow: -40vmin 0 5.089586390630414vmin currentColor;
}
.background span:nth-child(18) {
    color: #FFACAC;
    top: 93%;
    left: 50%;
    animation-duration: 54s;
    animation-delay: -17s;
    transform-origin: -8vw -19vh;
    box-shadow: 40vmin 0 5.334190144848552vmin currentColor;
}
.background span:nth-child(19) {
    color: #1b7c9a;
    top: 8%;
    left: 68%;
    animation-duration: 32s;
    animation-delay: -24s;
    transform-origin: -22vw 18vh;
    box-shadow: 40vmin 0 5.224843731904125vmin currentColor;
}

</style>