<template>
    <div>
      <!--面包屑-->
      <el-breadcrumb separator="/" style="padding-left: 10px;padding-bottom: 10px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!--用户列表卡片-->
      <el-card class="box-card">
        <el-row style="padding-bottom: 10px">
          <el-button type="danger" icon="el-icon-plus" @click="addUser">添加用户</el-button>
        </el-row>

        <AddUser ref="AddUser" :refresh="selectUser"></AddUser>
        <UpdUser ref="UpdUser" :refresh="selectUser"></UpdUser>

        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="uid"
            label="ID">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="passWord"
            label="密码">
          </el-table-column>
          <el-table-column
            prop="type"
            label="状态">
            <template slot-scope="scope">
              {{scope.row.type==0?'管理员':'普通用户'}}
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" @click="updUser(scope.row.uid)">修改</el-button>
              <el-button type="warning" icon="el-icon-close" @click="delUser(scope.row.uid)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
</template>

<script>
  import axios from 'axios'
  import AddUser from "./AddUser";
  import UpdUser from "./UpdUser";

    export default {
        name: "User",
      components:{
        AddUser,
        UpdUser
      },
      data() {
        return {
          tableData: []
        }
      },
      mounted() {
          this.selectUser();
      },
      methods:{
        //修改弹窗
        updUser(id){
          this.$refs.UpdUser.visible=true
          this.$refs.UpdUser.init(id)
        },
        //添加弹窗
        addUser(){
          this.$refs.AddUser.visible=true
        },
        //查询用户表
        selectUser(){
          axios.post('http://localhost:8888/user/queryAllUser')
          .then((res) =>{
            console.log(res.data)
            this.tableData=res.data;
          })
        },
        //删除
        delUser(id){
          this.$confirm('您确定要删除嘛',{
            confirmButtonText:'确定',
            cancelButtonText:'取消',
          }).then(() =>{
            axios.post(`http://localhost:8888/user/delUserById/${id}`)
              .then((res) =>{
                if(res.data){
                  this.$message('删除成功')
                  this.selectUser()
                }else {
                  this.$message('删除失败')
                }
              })
          })
        }

      }

    }
</script>

<style scoped>

</style>
