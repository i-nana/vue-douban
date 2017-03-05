import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Subject from '../pages/Subject'
import Status from '../pages/Status'
import Group from '../pages/Group'
import Profile from '../pages/Profile'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/subject',
      name: 'Subject',
      component: Subject
    }, {
      path: '/status',
      name: 'Status',
      component: Status
    }, {
      path: '/group',
      name: 'Group',
      component: Group
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: 'Index',
      redirect: '/'
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
