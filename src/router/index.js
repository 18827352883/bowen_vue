import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login";
import Main from "../views/Main";
import User from "../views/user/User";
import Supplier from "../views/supplier/Supplier";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>import('../views/Login')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('../views/Login')
    },
    {
      path: '/main',
      name: 'Main',
      component: ()=>import('../views/Main'),
      children: [
        {
          path: '/user',
          name: 'User',
          component: ()=>import('../views/user/User')
        },
        {
          path: '/supplier',
          name: 'Supplier',
          component: ()=>import('../views/supplier/Supplier')
        }
      ]
    }
  ]
})
