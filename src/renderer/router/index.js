import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routesMap = [
  {
    path: '/',
    name: 'index',
    component: require('@/views/index').default
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: routesMap
})
