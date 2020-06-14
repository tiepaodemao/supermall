import Vue from 'vue'
import Router from 'vue-router'
const Cart= () => import('../views/cart/Cart')
const Category= () => import('../views/category/Category')
const Home= () => import('../views/home/Home')
const Profile= () => import('../views/profile/Profile')
const Detail= () => import('../views/detail/Detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/detail/:iid',
      component: Detail
    }
  ],
  mode: 'history'
})
