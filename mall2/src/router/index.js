import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const ProFile = () => import('../views/profile/ProFile')
const Sort = () => import('../views/category/Sort')
const ShopCart = () => import('../views/shopcart/ShopCart')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home'
  },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      component: ProFile
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/sort',
      component: Sort
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
