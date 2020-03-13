import Vue from 'vue'
import VueRouter from 'vue-router'

import CodeOutput from '@/components/CodeOutput'
import SourceCode from '@/components/SourceCode'

import Home from '@/views/Home'
import Form from '@/views/Form'
import PreMadeLayouts from '@/views/PreMadeLayouts'
import Preview from '@/views/Preview'

import PreMadeLayoutsJson from '@/data/PreMadeLayouts'

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
    path: '/preview',
    name: 'Preview',
    component: Preview
  },

  {
    path: '/form/:layout',
    name: 'Form',
    component: Form,
    children: [ { path: '*', redirect: '/'} ],
    beforeEnter: (to, from, next) => {
      const layout = to.params.layout
      if(layout === 'new'){
        next()
      }
      if(Object.keys(PreMadeLayoutsJson).includes(layout)){
        next()
      } else {
        next('/form/new')
      }
      next()
    }
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
