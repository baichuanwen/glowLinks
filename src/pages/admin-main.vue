<template>
   <div class="layui-body">
    <!-- 内容主体区域 -->
    <div class="layui-tab">
      <ul class="layui-tab-title">
        <router-link tag="li" :to="`/main/arrange/${$route.params.id}`" active-class="layui-this">整理</router-link>
        <router-link tag="li" :to="`/main/datas/${$route.params.id}`" active-class="layui-this" >数据</router-link>
        <router-link  tag="li" :to="`/main/setting/${$route.params.id}`" active-class="layui-this">设置</router-link>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
               <router-view></router-view>
        </div>
  
      </div>
    </div>
  </div>
</template>


