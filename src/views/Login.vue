<template>
  <!--登录表单容器-->
  <div class="login_container">
    <!---登录区域-->
    <div class="login_box">
      <!--头像-->
      <div class="avatar_box">
        <img src="../assets/img/微信图片_20210222133202.jpg">
      </div>
      <!--表单-->
      <el-form :model="loginForm" :rules="loginrules" ref="loginForm" label-width="0px" class="login_Form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.userName" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="login_btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          userName: '',
          password: '',
        },
        loginrules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入登录密码', trigger: 'blur'},
            {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm() {
        //登录成功重定向到主页面
        this.$router.push("/main")
      },
    }
  }
</script>

<style scoped lang="less">
  .login_container {
    height: 730px;
    background-color: #E9EEF3;

  }

  .login_box {
    width: 450px;
    height: 380px;
    background-color: bisque;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      width: 130px;
      height: 130px;
      border: azure;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /*阴影*/
      margin: -65px auto;
      background-color: azure;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .login_Form {
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 50px;
      box-sizing: border-box;
    }
  }
</style>
