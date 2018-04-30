
<template>
  <div id="shuju" class="campaignName_wrap page3 contentitem">
            <campaignTable></campaignTable>
            <div style="border-bottom: 1px  solid  #ccc;margin-bottom: 10px"></div>
           <echarts></echarts>  
          </div>

</template>

<script>
import campaignTable  from "../components/campaignTable"
import echarts  from "../components/echarts"
export default {
  data() {
    return {
      getdatas: {}
    }
  },
   components:{campaignTable,echarts}
  
}
</script>