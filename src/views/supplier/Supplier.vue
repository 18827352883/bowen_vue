<template>
    <div>
      <!--面包屑-->
      <el-breadcrumb separator="/" style="padding-bottom: 10px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!--供应商列表卡片-->
      <el-card class="box-card" style="height: 630px">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label-width="70px" label="供应商">
            <el-input v-model="name" clearable placeholder="请输入供应商"></el-input>
          </el-form-item>
          <el-form-item label-width="70px" label="电话">
            <el-input v-model="phone" clearable placeholder="请输入供应商电话"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="selectSup">查询</el-button>
            <el-button type="primary" @click="addSupplier">添加</el-button>
            <el-button type="danger" @click="delByIds(sels)">删除</el-button>
          </el-form-item>
        </el-form>

        <AddSupplier ref="AddSupplier" :refresh="selectSupplier"></AddSupplier>
        <UpdSupplier ref="UpdSupplier" :refresh="selectSupplier"></UpdSupplier>

        <el-table
          :data="tableData"
          @selection-change="selsChange"
          height="500px"
          border
          style="width: 100%;">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="sid"
            label="ID">
          </el-table-column>
          <el-table-column
            prop="name"
            label="供应商">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="wechat"
            label="qq或者微信">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="备注">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="delSupplier(scope.row.sid)">删除</el-button>
              <el-button size="mini" type="success" @click="updSupplier(scope.row.sid)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
<!--        <el-pagination-->
<!--          @size-change="handleSizeChange"-->
<!--          @current-change="handleCurrentChange"-->
<!--          :current-page="currentPage4"-->
<!--          :page-sizes="[100, 200, 300, 400]"-->
<!--          :page-size="100"-->
<!--          layout="total, sizes, prev, pager, next, jumper"-->
<!--          :total="400">-->
<!--        </el-pagination>-->
      </el-card>
    </div>
</template>

<script>
  import axios from 'axios'
  import AddSupplier from "./AddSupplier";
  import UpdSupplier from "./UpdSupplier";

    export default {
        name: "Supplier",
      components:{
          AddSupplier,
        UpdSupplier
      },
      data(){
          return{
            sels: [],//选中的值显示
            tableData:[],
            phone:'',
            name:'',
          }
      },
      mounted() {
          this.selectSupplier()
      },
      methods:{
          //添加弹窗
        addSupplier(){
          this.$refs.AddSupplier.visible=true
        },
        //修改弹窗
        updSupplier(id){
          this.$refs.UpdSupplier.visible=true
          this.$refs.UpdSupplier.init(id)
        },
        //查询
        selectSupplier(){
          axios.get('http://localhost:8888/supplier/queryAllSupplier')
            .then((res) =>{
              this.tableData=res.data
            })
        },
        //根据条件查询
        selectSup(){
          axios.get('http://localhost:8888/supplier/queryAllSupplier',{
            params:{
              name:this.name,
              phone:this.phone
            }
          })
          .then((res)=>{
            this.tableData=res.data
          })

        },
        //删除
        delSupplier(id){
          this.$confirm('您确定要删除嘛',{confirmButtonText:'确定',cancelButtonText:'取消'}).then(()=>{
            axios.post(`http://localhost:8888/supplier/delSupplier/${id}`)
              .then((res) =>{
                if(res.data){
                  this.$message('删除成功')
                  this.selectSupplier()
                }else{
                  this.$message('删除失败')
                }
              })
          })
        },
        //选中时触发（多选框）
        selsChange(sels) {
          this.sels = sels
        },
        //批量删除
        delByIds(){
          if(this.sels==''){
            this.$message('请选择您要删除的数据')
          }else {
            var ids= this.sels.map(item => item.sid).join()//获取所有选中行的id组成的字符串，以逗号分隔
            this.$confirm('您确定要删除多条数据嘛',{confirmButtonText:'确定',cancelButtonText:'取消'}).then(()=>{
              axios.post('http://localhost:8888/supplier/delSupplierById?ids='+ids)
                .then((res) =>{
                  if(res.data){
                    this.$message('删除成功')
                    this.selectSupplier()
                  }else {
                    this.$message('删除失败')
                  }
                })
            })
          }
        },


      }
    }
</script>

<style scoped>

</style>
