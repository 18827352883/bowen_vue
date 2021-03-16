<template>
  <el-dialog title="供应商修改" :visible.sync="visible" width="27%">
    <el-form :model="from" label-position="right" label-width="90px">
      <el-form-item label="供应商">
        <el-input v-model="from.name" placeholder="请输入供应商名称" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="from.phone" placeholder="请输入电话" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="微信或者QQ">
        <el-input v-model="from.wechat" placeholder="请输入微信或者QQ" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="from.createTime" type="date" placeholder="选择日期" style="width: 250px"></el-date-picker>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="from.remarks" type="textarea" :rows="2" placeholder="请输入内容" style="width: 250px">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updSupplier">修改</el-button>
        <el-button type="info">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "UpdSupplier",
      props:{
        refresh:Function
      },

      data(){
          return{
            visible:false,
            from:{
              name:'',
              phone:'',
              wechat:'',
              createTime:'',
              remarks:'',
            }
        }
      },
      methods:{
        init(id){
          this.visible=true
          axios.get(`http://localhost:8888/supplier/querySupplierById/${id}`)
          .then((res) =>{
            this.from=res.data
          })
        },
        //修改
        updSupplier(){
          axios.post('http://localhost:8888/supplier/updSupplier',this.from)
          .then((res)=>{
            if(res.data){
              this.$message('修改成功')
              this.visible=false
              this.refresh()
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
