import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home.vue')
const Category = () => import('../views/Category/Category.vue')
const ShoppingCar = () => import('../views/ShoppingCar/ShoppingCar.vue')
const Me = () => import('../views/Me/Me.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shoppingcar',
    name: 'shoppingcar',
    component: ShoppingCar
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
