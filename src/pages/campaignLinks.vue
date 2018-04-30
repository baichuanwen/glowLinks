<template>
   <table class="layui-table">
  <thead>
    <tr>
      <th width="10%">ID</th>
      <th width="30%">用户名</th>
      <th>URL</th>
    </tr>
    <tr v-for='item in links'>
        <td>{{item.id}}</td>
        <td>{{item.spotName}}</td>
        <td>{{item.toUrl}}</td>
    </tr>
  </thead>
</table>
</template>


<script>
import {campLinks} from "../service/index"
export default {
    data(){
      return{
          links:[],
          
      }
    },
  mounted(){
     
     this.getdata()
      },
  methods:{
      getdata(){
          campLinks({camId:this.$route.params.id}).then(res=>{
            if(res.code==0&res.data&&res.data.data){
              this.links=res.data.data;
          }

      })
      }
  }
}

</script>
