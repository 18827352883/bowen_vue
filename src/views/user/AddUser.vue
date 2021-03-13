<template>
  <el-dialog title="用户添加" :visible.sync="visible" width="400px">
    <el-form :model="form" label-position="right" label-width="50px" >
      <el-form-item label="账号:">
        <el-input v-model="form.userName" placeholder="请输入用户名" ></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.passWord" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="权限" >
        <el-radio v-model="form.type" label="0">管理员</el-radio>
        <el-radio v-model="form.type" label="1">普通用户</el-radio>
      </el-form-item>
      <el-form-item label-width="110px">
        <el-button type="primary" @click="addUser">添加</el-button>
        <el-button type="info" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import axios from 'axios'

    export default {
      props:{
        refresh:Function
      },
        name: "AddUser",
      data() {
        return {
          visible: false,
          form: {
            userName: undefined,
            passWord: undefined,
            type: undefined,
          },
        }
      },
      methods:{
        //添加
        addUser(){
          axios.post('http://localhost:8888/user/addUser',this.form)
          .then((res) =>{
            if(res.data){
              this.$message('添加成功')
              this.visible=false
              this.refresh()
              this.form={brand_right:0}
            }else {
              this.$message('添加失败')
            }
          })
        },
        //重置
        reset(){
          this.form={brand_right:0}
        }
      }


    }
</script>

<style scoped>

</style>
