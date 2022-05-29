import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ClientsView from '../views/ClientsView.vue'
import InstallersView from '../views/InstallersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsView
  },

  {
    path: '/installer',
    name: 'installer',
    component: InstallersView
  },

  {
    path: '/about-client',
    name: 'about-client',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About-clients.vue')
  },

  {
    path: '/about-installer',
    name: 'about-installer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About-installers.vue')
  },

  {
    path: '/plans',
    name: 'plans',
    // route level code-splitting
    // this generates a separate chunk (plans.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "plans" */ '../components/Plans.vue')
  },

  {
    path: '/installers',
    name: 'installers',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (installers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "installers" */ '../components/Installers.vue')
  },

  {
    path: '/calls',
    name: 'calls',
    // route level code-splitting
    // this generates a separate chunk (installers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "installers" */ '../components/Calls.vue')
  },

  {
    path: '/works',
    name: 'works',
    // route level code-splitting
    // this generates a separate chunk (installers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "installers" */ '../components/Works.vue')
  },
  {
    path: '/maps',
    name: 'maps',
    // route level code-splitting
    // this generates a separate chunk (installers.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "installers" */ '../components/MapServices.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
