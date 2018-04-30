<template>
  <div class="hello">
    <div class="layui-layout-body re-build">
      <div class="layui-layout layui-layout-admin">
        <div class="layui-header">
          <div class="layui-logo"><img src="../asests/images/logo_02.png" alt=""></div>
           <ul class="layui-nav layui-layout-left" v-if="navShow" >
            <li class="layui-nav-item">
              <a href="javascript:;" @click="createNewCamp"> <i class="layui-icon" style="font-size: 22px; color: #ffF;"> &#xe608;</i> New Campaign</a>
            </li>
          </ul>
          <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item">
              <a>
                <img src="../asests/images/logo_02.png" class="layui-nav-img"> 727764845@qq.com
              </a>
              <dl class="layui-nav-child">
                <dd><a @click="goRouter()">基本资料</a></dd>
                <dd><a  @click='saySha'>安全退出</a></dd>
              </dl>
            </li>
          </ul>
        </div>
          <router-view></router-view>
  </div>
    </div>
  </div>
</template>

<script>
 
  export default {
    name: 'HelloWorld',
    data() {
      return {
         navShow:true
      }
    },
    watch:{
    '$route' (to) {
           if(to.path=="/self"||to.path.indexOf("campginLinks")>-1){
                    this.navShow=false
                }else{
                    this.navShow=true
                }
                
            }
    },
   created: function() {
      layui.use("element", function() {
        var element = layui.element;
      })
    },
     methods: {
      createNewCamp: function() {
        this.operatorType = true;
        this.layerOpen($(".newCamp"))
      },
      goRouter(){
        this.$router.push({path: '/self'});
      },
      saySha(){
           this.layerMsg("没接口 退不出啊")
            this.$router.push({path: '/'});
      },
     
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

