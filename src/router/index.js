import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/admin-main'
import adminBody from '@/pages/addminBody'
import arrange from '@/pages/arrange'
import setting from '@/pages/setting'
import datas from '@/pages/datas'
import self from '@/pages/self'
import campginLinks from "@/pages/campaignLinks"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:adminBody,
      children:[{
        path: 'main',
        name: "main",
        component: main,
      children: [
          {
            path: 'arrange/:id',
            name: "arrange",
            component: arrange,
  
          },
          {
            path: 'setting/:id',
            name: "setting",
            component: setting
          },
          {
            path: 'datas/:id',
            name: "datas",
            component: datas
          }
        ]
  
      }],
    },
    {
      path: '/self',
     component: self
    },{
      path :'/campginLinks/:id',
      component:campginLinks
    }
    


  ]

})
