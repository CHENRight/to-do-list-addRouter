import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Home from "@/views/Home";
import container from "@/components/container";
import MyMessage from "@/views/MyMessage";


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
        { path: '/',redirect:'/list'},
        { path: '/list', component: container},
        { path:'/other',component: MyMessage}
      ]
    }
  ]
})
