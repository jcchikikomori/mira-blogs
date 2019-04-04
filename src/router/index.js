import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import B1 from '@/components/test/B1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/blog',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/b1',
      name: 'B1',
      component: B1
    }
  ]
})
