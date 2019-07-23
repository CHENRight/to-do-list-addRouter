import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Home from "@/components/Home";
import container from "@/components/container";
import HelloWorld from "@/components/HelloWorld";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/home',
      component: Home,
      children: [
        { path: '/',redirect:'/list' },
        { path: '/list', component: container},
        { path:'/other',component: HelloWorld}
      ]
    }
  ]
})
