import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import home from '@/pages/home'
import news from '@/pages/news'
import newsCenter from '@/pages/newsCenter/newsCenter'
import official_notice from '@/pages/newsCenter/official_notice'
import industry_dynamics from '@/pages/newsCenter/industry_dynamics'
import international_dynamics from '@/pages/newsCenter/international_dynamics'

import system from '@/pages/system/system'
import application from '@/pages/application/application'
import resource from '@/pages/resource/resource'
import help from '@/pages/help/help'

Vue.use(VueRouter)

const router =  new VueRouter({
  routes: [
    {
      path: '/',
      redirect(to) {
        if(to.path == '/'){
          return '/home'
        }
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/news',
      name: 'news',
      component: news,
      children: [
        {
          path: 'newsCenter',
          name: 'newsCenter',
          component: newsCenter
        },
        {
          path: 'official_notice',
          name: 'official_notice',
          component: official_notice
        },
        {
          path: 'industry_dynamics',
          name: 'industry_dynamics',
          component: industry_dynamics
        },
        {
          path: 'international_dynamics',
          name: 'international_dynamics',
          component: international_dynamics
        }
      ]
    },{
      path: '/system',
      name: 'system',
      component: system
    },{
      path: '/application',
      name: 'application',
      component: application
    },{
      path: '/resource',
      name: 'resource',
      component: resource
    },{
      path: '/help',
      name: 'help',
      component: help
    }
  ]
})
export default router
