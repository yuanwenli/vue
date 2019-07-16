import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Index from '@/pages/index/index'
import  Acom from "@/components/a"
import  Bcom from "@/components/b"
import  Ccom from "@/components/c"
import  Dcom from "@/components/d"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/home/a',
      children:[
        {
          path: '/home/a',
          name: 'HomeA',
          component: Acom,
          redirect:"/home/a/c",
          children:[
            {
              path: '/home/a/c',
              name: 'homeC',
              component: Ccom,
            },
            {
              path: '/home/a/d',
              name: 'homeD',
              component: Dcom,
            }
          ]
        },
        {
          path: '/home/b',
          name: 'homeB',
          component: Bcom,
        }
      ]
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
