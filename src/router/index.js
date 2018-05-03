import Vue from 'vue'
import Router from 'vue-router'

// Components imports
import Home from '@/components/Home'
import Bookmark from '@/components/Bookmark'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: Bookmark
    }
  ]
})
