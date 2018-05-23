import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
