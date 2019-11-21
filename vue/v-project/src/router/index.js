import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import home from '../page/home'
import classify from '../page/classify'
import cart from '../page/cart'
import mine from '../page/mine'
import detil from '../page/detil'
import login from '../page/login'
import register from '../page/register'

//pc
import adminuser from '../page/admin/adminuser'
import admin from '../page/admin/admin'
import vip from '../page/admin/vip'
import goods from '../page/admin/goods'
import classifys from '../page/admin/classifys'
import banner from '../page/admin/banner'
import goodsChange from '../page/admin/goodsChange'
import adminLogin from '../page/admin/adminLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'classify',
          component:classify
        },
        {
          path:'cart',
          component:cart
        },
        {
          path:'mine',
          component:mine
        }
      ]
    },
    {
      path:'/detil',
      component:detil
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/adminuser',
      component:adminuser,
      children:[
        {
          path:'admin',
          component:admin
        },
        {
          path:'vip',
          component:vip
        },
        {
          path:'goods',
          component:goods
        },
        {
          path:'classifys',
          component:classifys
        },
        {
          path:'banner',
          component:banner
        },
        {
          path:'goodsChange',
          component:goodsChange
        },
      ]
    },
    {
      path:'/adminLogin',
      component:adminLogin
    },
  ]
})
