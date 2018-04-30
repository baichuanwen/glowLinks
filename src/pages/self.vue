
<template>
  <div class="layui-content self-center">
    <h2> 更改账号设置</h2>
      <div class="layui-container">
        <div class="layui-row">
          <div class="layui-col-md2">
            账号：
          </div>
          <div class="layui-col-md10">
            727764845@qq.com
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col-md2">
            当前密码：
          </div>
          <div class="layui-col-md10">
            <input v-model="currPass" type="text">
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col-md2">
            新密码：
          </div>
          <div class="layui-col-md10">
            <input v-model="newPass" type="text">
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col-md2">
            确认密码：
          </div>
          <div class="layui-col-md10">
            <input v-model="reNewPass" type="text">
          </div>
        </div>
        <div class="layui-row">
          <div class="layui-col-md2">
            &nbsp;
          </div>
          <div class="layui-col-md10">
            <a class="submit-btn" @click="subData">完成</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {updataPass}  from "../service/index"
export default {
    data(){
       return{
               currPass:"",
               newPass:"",
               reNewPass:"",
               }
    },
    mounted:function(){
      

    },
    methods:{
      subData(){
        this.newPass=this.newPass.trim();
        this.reNewPass=this.reNewPass.trim();
        this.currPass=this.currPass.trim();
        if(!(this.newPass&&this.reNewPass&&this.currPass)){
          this.layerMsg("密码不能为空！")
          return  false;
        }
         if(this.newPass!==this.reNewPass){
           this.layerMsg("两次密码不一致")
            return  false;
         }
         let param={
            newPass:this.newPass,
            currPass:this.currPass,
            reNewPass:this.reNewPass
         }
         updataPass(param).then(res=>{
            if(res.data){
                  this.layerMsg("密码重置成功!");
                  this.$router.push({path :"/main/arrange/default"})
            }else{
               this.layerMsg(res.msg)
              
            }
            
         })

      }
      

     
    }
}
</script>
