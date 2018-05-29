import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

export default new Router({
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	},
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/city',
    	name: 'City',
    	component: City
    },
    {
    	path: '/detail/:id',
    	name: 'Detail',
    	component: Detail
    }
  ]
})
