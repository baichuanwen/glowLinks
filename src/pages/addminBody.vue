<template>
     <div class="adminContent">
              <leftside></leftside>
            <div class="newCamp" style="display:none">
              <setting :operatorType="operatorType"></setting>
            </div>
            <router-view></router-view>
            <footers></footers>
        </div>
</template>

<script>
  import leftside from "../components/leftside";
  import setting from "../pages/setting"
  import footers from "../components/footer"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        operatorType: false,
      }
    },
    components: {
      leftside,
      setting,
      footers,
      
    },
    created: function() {
    
    },
    computed: {
    },
    // 我在test分支上删掉了111几个空的方法  我想在master 分支上看效果 和在bbb 上 有什么区别 ；

    // ？？hello bbb上；；；；、、；、’的修改
    methods: {
      createNewCamp: function() {
        this.operatorType = true;
        this.layerOpen($(".newCamp"))
      },
    },
  }
</script>
