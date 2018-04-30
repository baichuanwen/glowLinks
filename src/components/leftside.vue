<template>
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="layui-nav-item layui-nav-itemed">
          <a class="" href="javascript:;">我的投放</a>
          <dl class="layui-nav-child">
            <dd v-for='(item,index) in canpainList' :data-id='item.id' :class='index==0?"layui-this":""'>
                <router-link :to="`/main/arrange/${item.id}`">
                    <span>{{item.campaignName}}</span>
                    <br><em>已点击 {{item.totalClick}}</em>
                </router-link>
            </dd>
           </dl>
        </li>
     </ul>
    </div>
  </div>
</template>
<script>

import {campaignList} from "../service/index"
      export default {
        name: 'leftside',
        msg:"",
        data () {
              return {
              canpainList:{}
                        
              }
            },
            created:function(){
                campaignList().then(res=>{
                  this.getCampaignList(res)
                })
            },
         
          mounted:function(){ 
               
                },
                computed:{
                  
                },
                methods:{
                  getCampaignList:function(res){
                    if(res.code==0&&res.data&&res.data.data){
                        this.canpainList= res.data.data;

                      }
                  },
                  
                
                },

          
      }

</script>
