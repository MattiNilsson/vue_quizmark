import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MakeQuiz',
    component: () => import('../views/MakeQuiz.vue')
  },
  {
    path: '/doQuiz',
    name: 'DoQuiz',
    component: () => import('../views/DoQuiz.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
