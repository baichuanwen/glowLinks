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
      footers
    },
    created: function() {
      layui.use("element", function() {
        var element = layui.element;
      })
    },
    computed: {
    },
    methods: {
      createNewCamp: function() {
        this.operatorType = true;
        this.layerOpen($(".newCamp"))
      },
    },
  }
</script>
