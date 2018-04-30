<template>
      <div>
        <div id="main" style="width: 97%;height:400px;float: right;"></div>
        <div id="main2" style="width: 97%;height:530px;float: right;"></div>
     </div>
</template>
<script>
import echarts from 'echarts'
import {fetchEcharts}  from "../service/index"
export default {
  data(){

      return{

      }
  },
  mounted(){
    var _this=this;
    var myChart = echarts.init(document.getElementById('main'));
    var myChart2 = echarts.init(document.getElementById('main2'));
    function drawLine(){
    	var lineOption = {};
    	var pieOption ={};
    	 myChart = echarts.init(document.getElementById('main'));
       	 myChart2 = echarts.init(document.getElementById('main2'));
   		 $.post("/proxy/auth/getSpotLineGraphic",{campaignId : _this.$route.params.id},function(res){
   			 //option.title = res.data.title;
   			 var lineObj =res.data.line;
   			 var pieObj = res.data.pie;
   			 lineOption.legend = {  x: 'left',data:lineObj.lenged.data };
   			 lineOption.series = lineObj.series;
             lineOption.series.center = ['55%', '30%'];
   			 lineOption.tooltip = {  trigger: 'axis'};
   			 lineOption.xAxis = {  axisLine : {onZero: true}, type: 'category', boundaryGap: false, data: lineObj.xAias};
   			 lineOption.yAxis = { axisLine : {onZero: true},   type: 'value', axisLabel: {formatter: '{value}' } },
   			 
   			pieOption.tooltip= { trigger: 'item',formatter: "{a} <br/>{b}: {c} ({d}%)" };
   			pieOption.legend ={ orient: 'vertical', x: 'left',data:pieObj.lenged.data };
   			pieOption.series = pieObj.series; 
   			for(var i=0;i<pieOption.series.length;i++){
   				//pieOption.series[i].label={ normal: {show: false,position: 'center' }, emphasis: {show: true, textStyle: { fontSize: '20',fontWeight: 'bold'} }};
   				pieOption.series[i].center = ['35%', '30%'],
   				pieOption.series[i].itemStyle={  
   	              normal: {label:{ show:true,  formatter:'{b} : {c} ({d}%)'}, labelLine:{show:true}},  
   	              emphasis: {show:true, textStyle: { fontSize: '20',fontWeight: 'bold'}, label: {  show:true, formatter: "{b}\n{c}({d}%)", position: 'left', textStyle: {fontSize: '20', fontWeight: 'bold'  }   }  }  
   	          }
   				pieOption.series[i].radius= ['40%', '50%'];
   			}
	       	 myChart = echarts.init(document.getElementById('main'));
	       	 myChart2 = echarts.init(document.getElementById('main2'));
	   		 myChart.setOption( lineOption );
	   		 myChart2.setOption( pieOption );
   		 },"json")
    };
    drawLine()

  },

}
</script>

