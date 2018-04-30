<template>
    <div class="layui-footer" v-if="showFooter">
    <a class="btn" id="down_btn" @click="goRouter">导出监测链接</a>
</div>
</template>
<script>
export default {
     data(){
         return{
              showFooter:true

         }
     },
     watch:{
         '$route' (to) {
                if(to.name=="arrange") {
                    this.showFooter=true
                }else{
                    this.showFooter=false
                }
                
            }
           
     },
     methods:{
         goRouter(){
             this.$router.push({path :`/campginLinks/${this.$route.params.id}`})
         }
     }
}
</script>

