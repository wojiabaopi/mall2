import Vue from 'vue'
import VueRouter from "vue-router";
import Register from "../views/Register";
import Login from "../views/Login";
import UserInfo from "../views/UserInfo";
import Edit from "../components/content/Edit";
import Home from "../views/Home";
import Article from "../components/content/Article";

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/home',
      meta: {
        keepalive: true
      }

    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userinfo',
      component: UserInfo
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/article/:id',
      component: Article
    }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
