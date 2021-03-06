import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home/Home.vue'
// import City from '@/views/city/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/home/Home.vue')
    },{
      path: '/city',
      name: 'City',
      component: ()=>import('@/views/city/City.vue')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: ()=>import('@/views/detail/Detail.vue')
    }],
    scrollBehavior (to, from, savedPosition){
      return {x: 0, y: 0}
    }
})
