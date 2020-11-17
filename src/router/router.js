import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        "requireAuth": true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        "requireAuth": true
      }
    },
    {
      path:'/admin',
      name:'admin',
      component:() => import(/* webpackChunkName: "admin" */ '../pages/Admin.vue'),
    }
  ]
})
