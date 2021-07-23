import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'default'
    },
    // component: require('@/pages/Home.vue').default
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/gioi-thieu',
    name: 'about',
    meta: {
      layout: 'no-sidebar'
    },
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/lien-he',
    name: 'contact',
    meta: {
      layout: 'no-sidebar'
    },
    component: () => import('@/pages/Contact.vue')
  },
  {
    path: '/kiem-tra-gio-hang',
    name: 'cartCheckout',
    meta: {
      layout: 'no-sidebar'
    },
    component: () => import('@/pages/CartCheckout.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      layout: 'no-sidebar'
    },
    component: () => import('@/pages/404.vue')
  }
]

// Để đường dẫn Path đẹp hơn và thân thiện với người dùng và SEO
// Chúng ta sử dụng History mode thay vì HashTag mode (dấu #)
const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
