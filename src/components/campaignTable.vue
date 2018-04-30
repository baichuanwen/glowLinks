<template>
      <table class="table">
              <tr class="top_table">
                <td class="title_name">
                  <a href="javascript:;" class="campaignName_title">{{getdatas.campaignName}} </a>
                  <p style="margin-top: 10px;">有效期：
                    <em class="startdate">{{getdatas.createTimeStr}}</em> —
                    <em class="expiredate">{{getdatas.expireTimeStr}}</em>
                  </p>
                </td>
                <td style="visibility: hidden;">
                  <a class="btn btn-info add_sbtn">
                    <span class="glyphicon glyphicon-plus-sign"></span>
                  </a>
                </td>
                <td colspan="4"> </td>
                <td class="Total_click" >
                  <strong>
                    <span class="total1_click">{{totalClick}}</span>
                    <span></span>
                  </strong>
                  <p style="display: inline-block">
                    <em>Total</em>
                    <br>
                    <em>Click</em>
                  </p>
                </td>
                <td class="spots_num">
                  <strong class="spot_number">{{spotCount}}</strong> Spots</td>
                <td class="Total_click" style="border: none;">
                  <strong>
                    <span class="avg_click">{{avgCount}}</span>
                  </strong>
                  <p style="display: inline-block">
                    <em> AVG</em>
                    <br>
                    <em>Click</em>
                  </p>
                </td>
              </tr>
            </table>
</template>
<script>
import {campaignId,CamId} from "../service/index"
export default {
    data() {
    return {
      getdatas: [],
      sportData:[],
      totalClick:0,
      spotCount:0,
      avgCount:0,
    }
  },
  watch: {
    '$route'(to, from) {
      this.fetchData();
      this.totalClick=0
      this.spotCount=0;
      this.avgCount=0;
    }
  },
  created: function () {
     this.fetchData()

  },
  computed: {

  },
  methods: {
    fetchData: function () {
      campaignId(this.$route.params.id).then(res => {
        
       if (res.code == 0 && res.data && res.data.data) {
        this.getdatas = res.data.data[0];
         }
      }) 
      CamId(this.$route.params.id).then(res=>{
         if (res.code == 0 && res.data && res.data.data) {
              var data =  this.sportData = res.data.data;
              
              
               this.spotCount=data.length;
               if(data.length>6){
                 var pageData=data.slice(0,6)
                 this.$emit("event1", pageData);
               }else{
                  this.$emit("event1", data);
               }
              
               console.log(data)
               data.forEach((item,index) => {
                this.totalClick+=item.clickCount
              });
            this.avgCount=Math.ceil(this.totalClick/this.spotCount);  
           }
      })
    },
   
  },
}

</script>

