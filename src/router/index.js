import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'common',
      component: resolve=>require(['@/components/common'],resolve),
      redirect: '/reserves',
      meta:{
        keepAlive:false
      },
      children:[{
        path:'/reserves',
        name:'reserves',
        component:resolve=>require(['@/pages/reserves'],resolve),
        meta:{
          keepAlive:false
        }
      },{
        path:'/peizhi',
        name:'peizhi',
        component:resolve=>require(['@/pages/peizhi'],resolve),
        meta:{
          keepAlive:false
        }
      },{
        path:'/choiceThree',
        name:'choiceThree',
        component:resolve=>require(['@/pages/choiceThree'],resolve),
        meta:{
          keepAlive:false
        }
      },{
        path:'/choiceFour',  
        name:'choiceFour',
        component:resolve=>require(['@/pages/choiceFour'],resolve),
        meta:{
          keepAlive:false
        }
      }]
    }
  ]
})
