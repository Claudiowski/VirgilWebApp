import Vue from 'vue'
import Router from 'vue-router'

import Consult from '@/pages/consult/Consult'
import Manage from '@/pages/manage/Manage'
import Review from '@/pages/review/Review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/consult',
      name: 'Consult',
      component: Consult
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    }
  ]
})
