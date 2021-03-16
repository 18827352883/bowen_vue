<template>
  <el-dialog title="供应商添加" :visible.sync="visible" width="27%">
    <el-form :model="form" label-position="right" label-width="90px">
      <el-form-item label="供应商">
        <el-input v-model="form.name" placeholder="请输入供应商名称" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" placeholder="请输入电话" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="微信或者QQ">
        <el-input v-model="form.wechat" placeholder="请输入微信或者QQ" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="form.createTime" type="date" placeholder="选择日期" style="width: 250px"></el-date-picker>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remarks" type="textarea" :rows="2" placeholder="请输入内容" style="width: 250px">
        </el-input>
      </el-form-item>
      <el-form-item label-width="110px">
        <el-button type="primary" @click="addSup">添加</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "AddSupplier",
      props:{
        refresh:Function
      },
      data(){
          return{
            visible:false,
            form:{
              name:'',
              phone:'',
              wechat:'',
              createTime:'',
              remarks:'',
            }
          }
      },
      methods:{
          //添加
        addSup(){
          axios.post('http://localhost:8888/supplier/addSupplier',this.form)
          .then((res)=>{
            if(res.data){
              this.$message('添加成功')
              this.visible=false
              this.refresh()
              this.form={brand_right:0}
            }else {
              this.$message('添加失败')
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
