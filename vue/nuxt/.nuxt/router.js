'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _de179666 = process.BROWSER_BUILD ? () => System.import('E:\\Github\\Web-Practice\\vue\\nuxt\\pages\\index.vue') : require('E:\\Github\\Web-Practice\\vue\\nuxt\\pages\\index.vue')


const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // Scroll to the top by default
    let position = { x: 0, y: 0 }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'router-link-active',
  scrollBehavior,
  routes: [
    
    {
      path: '/',
      component: _de179666
    }
    
  ]
})
