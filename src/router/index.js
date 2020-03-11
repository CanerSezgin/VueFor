import Vue from 'vue'
import VueRouter from 'vue-router'

import CodeOutput from '@/components/CodeOutput'
import SourceCode from '@/components/SourceCode'

import Home from '@/views/Home'
import NewForm from '@/views/NewForm'
import PreMadeLayouts from '@/views/PreMadeLayouts'

Vue.use(VueRouter)


const routes = [
  /* {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }, */
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewForm',
    component: NewForm
  },
  {
    path: '/layouts',
    name: 'PreMadeLayouts',
    component: PreMadeLayouts
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
