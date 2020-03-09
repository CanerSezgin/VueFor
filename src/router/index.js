import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import CodeOutput from '@/components/CodeOutput'
import SourceCode from '@/components/SourceCode'

Vue.use(VueRouter)


const routes = [
  /* {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }, */
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/code',
    name: 'Code',
    component: CodeOutput
  },
  {
    path: '/source',
    name: 'SourceCode',
    component: SourceCode
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
