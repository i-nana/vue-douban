import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import Subject from '../pages/Subject/Subject'
import Status from '../pages/Status/Status'
import Group from '../pages/Group/Group'
import Profile from '../pages/Profile/Profile'

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
