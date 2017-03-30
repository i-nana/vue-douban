import App from '../App'

// 【路由懒加载】将组建按组分块
const Index = r => require.ensure([], () => r(require('../pages/Index/Index')), 'Index')
const Movie = r => require.ensure([], () => r(require('../pages/Subject/Movie')), 'Movie')
const Book = r => require.ensure([], () => r(require('../pages/Subject/Book')), "Book")
const Status = r => require.ensure([], () => r(require('../pages/Status/Status')), 'Status')
const Group = r => require.ensure([], () => r(require('../pages/Group/Group')), 'Group')
const Profile = r => require.ensure([], () => r(require('../pages/Profile/Profile')), 'Profile')
const Themes = r => require.ensure([], () => r(require('../pages/Index/Themes')), "Themes")
const Demo = r => require.ensure([], () => r(require('../pages/Index/Demo')), "Demo")

export default [{
  path: '/',
  name: 'index',
  component: Index
}, {
  path: '/movie',
  name: 'movie',
  component: Movie
}, {
  path: '/book',
  name: 'book',
  component: Book
}, {
  path: '/status',
  name: 'status',
  component: Status
}, {
  path: '/group',
  name: 'group',
  component: Group
}, {
  path: '/profile',
  name: 'profile',
  component: Profile
}, {
  path: 'Index',
  redirect: '/'
}, {
  path: '/themes',
  name: 'themes',
  component: Themes
}, {
  path: '/demo',
  name: 'demo',
  component: Demo
}, {
  path: '*',
  redirect: '/'
}];