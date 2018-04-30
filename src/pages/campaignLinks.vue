<template>
  <table class="layui-table" lay-even="even" lay-skin="nob">
    <colgroup>
    <col>
    <col>
    <col>
    <col>
  </colgroup>
    <thead>
      <tr>
        <th width="10%">ID</th>
        <th width="30%">用户名</th>
        <th>URL</th>
        <th width="21%">复制URL</th>
      </tr>
      <tr v-if="isNull">
        <td colspan="4">暂无数据</td>
      </tr>
      <tr v-else v-for='item in links'>
        <td>{{item.id}}</td>
        <td>{{item.spotName}}</td>
        <td> <span :id="item.toUrl" >{{item.toUrl}}</span></td>
       <td><input type="button" class="layui-btn layui-btn-normal layui-btn-sm" v-clipboard:copy="item.toUrl" v-clipboard:success="onCopy" v-clipboard:error="onError" value="复制"></td>
      </tr>
    </thead>
  </table>
</template>
<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard)
  import {
    campLinks
  } from "../service/index"
  export default {
    data() {
      return {
        links: [],
        isNull: false,
      }
    },
    created() {
      this.getdata()
    },
    mounted() {
     
    },
    methods: {
      getdata() {
        campLinks({
          camId: this.$route.params.id
        }).then(res => {
          if (res.code == 0 && res.data && res.data.data) {
            this.links = res.data.data;
          } else {
            this.isNull = true;
            console.log(this.isNull)
            console.log("暂无数据")
          }
        })
      },
      onCopy(e){
        this.layerMsg("复制成功 值为"+e.text)
      },
      onError(){
        this.layerMsg("复制失败")
      }
    }
  }
</script>
