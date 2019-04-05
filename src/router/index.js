import VueRouter from 'vue-router'

import About from '@/components/About'
import Contact from '@/components/Contact'

import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/show-board/:id',
      name: 'ShowBoard',
      component: ShowBoard
    },
    {
      path: '/add-board',
      name: 'AddBoard',
      component: AddBoard
    },
    {
      path: '/edit-board/:id',
      name: 'EditBoard',
      component: EditBoard
    }
  ]
})
