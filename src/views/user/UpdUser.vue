<template>
  <el-dialog title="用户修改" :visible.sync="visible" width="400px">
    <el-form :model="form" label-position="right" label-width="50px" >
      <el-form-item label="账号:">
        <el-input v-model="form.userName" placeholder="请输入用户名" ></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.passWord" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="权限:">
        <el-radio-group v-model="form.type">
          <el-radio-button label="0">管理员</el-radio-button>
          <el-radio-button label="1">普通用户</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label-width="110px">
        <el-button type="primary" @click="updUser">修改</el-button>
        <el-button type="info">重置</el-button>
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
    name: "UpdUser",
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
      //根据ID查询
      init(id){
        this.visible=true
        axios.post(`http://localhost:8888/user/queryUserById/${id}`)
        .then((res) =>{
          this.form=res.data
        })
      },
      //修改
      updUser(){
        axios.post('http://localhost:8888/user/updUser',this.form)
        .then((res) =>{
          if(res.data){
            this.$message('修改成功')
            this.visible=false
            this.refresh();
          }else {
            this.$message('修改失败')
          }
        })
      }

    }


  }
</script>

<style scoped>

</style>
