import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CRM from './views/CRM/CRM.vue'
import Todolist from './views/CRM/components/Todolist.vue'
import Customerinformationentry from './views/CRM/components/Customerinformationentry.vue'
import Customerinformationquery from './views/CRM/components/Customerinformationquery.vue'
import Customervisitprocessing from './views/CRM/components/Customervisitprocessing.vue'
import Customerreturnvisitmanagement from './views/CRM/components/Customerreturnvisitmanagement.vue'
import Financialexpenseinformationentry from './views/CRM/components/Financialexpenseinformationentry.vue'
import FinancialExpenseInformation from './views/CRM/components/FinancialExpenseInformation.vue'

import QQ from './views/QQ/QQ.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/crm',
      name: 'crm',
      component: () => import(/* webpackChunkName: "crm" */ './views/CRM/CRM.vue'),
      children:[
        {
          path:'todolist',
          name:'todoList',
          component:Todolist
        },
        {
          path:'customerinformationentry',
          name:'customerinformationentry',
          component:Customerinformationentry
        },
        {
          path:'customerinformationquery',
          name:'customerinformationquery',
          component:Customerinformationquery
        },
        {
          path:'customervisitprocessing',
          name:'customervisitprocessing',
          component:Customervisitprocessing
        },
        {
          path:'customerreturnvisitmanagement',
          name:'customerreturnvisitmanagement',
          component:Customerreturnvisitmanagement
        },
        {
          path:'financialexpenseinformationentry',
          name:'financialexpenseinformationentry',
          component:Financialexpenseinformationentry
        },
        {
          path:'financialexpenseinformation',
          name:'financialexpenseinformation',
          component:FinancialExpenseInformation
        },
        
      ]
    },
    {
      path: '/qq',
      name: 'qq',
      component: () => import(/* webpackChunkName: "qq" */ './views/QQ/QQ.vue')
    }
  ]
})
