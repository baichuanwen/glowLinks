<template>
  <div id="setting" class="page2 contentitem" style="max-width:780px; overflow:hidden">
    <h3 v-if="!operatorType" style="font-size:16px; margin-left: 28px; color: #000; margin-bottom: 20px">New Campaign</h3>
    <h3 v-else></h3>
    <div class="layui-container ">
      <div class="layui-row  re-form">
        <form action="">
          <div class="layui-col-md2">
            名称：
          </div>
          <div class="layui-col-md10">
            <input type="text" name="campaignName" v-model="getdatas.campaignName">
          </div>
          <div class="layui-col-md2">
            LandingPage：
          </div>
          <div class="layui-col-md10">
            <textarea v-if="operatorType" name="landingPage" placeholder="请输入点击后跳转页面的完整地址" v-model=" getdatas.landingPage" rows="3"></textarea>
            <textarea v-else name="landingPage" placeholder="请输入点击后跳转页面的完整地址" v-model=" getdatas.landingPage" rows="3"></textarea>
          </div>
          <div class="layui-col-md2">
            有效期
          </div>
          <div class="layui-col-md10">
            <select name="expireType" class="form-control" v-model="getdatas.expireType" style="width: 200px; border: 1px  solid  #bfbfbf;;">
                        <option value="4">4周</option>
                        <option value="8">8周</option>
                        <option value="12">12周</option>
                      </select>
          </div>
          <div class="layui-col-md2">
            备注：
          </div>
          <div class="layui-col-md10">
            <textarea name="remark" v-model="getdatas.remark" rows="3" placeholder="请输入点击后跳转页面的完整地址"></textarea>
          </div>
          <div class="layui-col-md2"></div>
          <div class="layui-col-md10">
            <a v-if="operatorType" class="btn createCamBtn " id="submit_btn" @click="creatCampaignForm">新增</a>
            <a v-else class="btn createCamBtn" @click="updataCampaigns">完成</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    campaignId,
    createCampaign,
    updataCampaign
  } from "../service/index"
  export default {
    data() {
      return {
        getdatas: {
          campaignName:"",
          remark:"",
          landingPage:"",
          expireType: 4,
          id:"",
        },
      }
    },
    props: ['operatorType'],
    watch: {
      '$route' (to, from) {}
    },
    created: function() {},
    beforeRouteEnter(to, from, next) {
      next(vm => vm.fetchData())
    },
    computed: {},
    methods: {
      fetchData: function() {
        campaignId(this.$route.params.id).then(res => {
          this.getdata(res)
        })
      },
      getdata(res) {
        if (res.code == 0 && res.data && res.data.data) {
         let  {remark,campaignName,landingPage,expireType,id} = res.data.data[0];
         this.getdatas.remark=remark;
         this.getdatas.campaignName=campaignName;
         this.getdatas.landingPage=landingPage;
         this.getdatas.expireType=expireType;
         this.getdatas.id=id;
        }
      },
      creatCampaignForm() {
        createCampaign(this.getdatas).then(res => {
           res.code==0?this.colse():true
           this.layerMsg(res.msg)
         })
      },
      updataCampaigns() {
          updataCampaign(this.getdatas).then(res => {
             this.layerMsg(res.msg)
        })
      }
    },
  }
</script>
