import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import Login from '@/components/contacts/Login'
import { authService } from './services/Auth'
import AddUser from '@/components/contacts/AddUser'
import store from './store'


const routes = [
  { path:'/', redirect:'/cars'},
  { path:'/cars', component:AppCars, name:'cars'},
  { path:'/edit/:id',component:AddCar, name:'edit'},
  { path:'/add', component:AddCar, name:'add-car'},
  { path: '/login', component: Login,name: 'login' },
  { path: '/register',component:AddUser, name:'register'}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next)=> {
    
  if(to.name !== 'login' && !authService.isAuthenticated() && to.name !== 'register') {
      return router.push( {name:'login'}); // reroute na login ako nije ulogovan
  }

  if(to.name == 'login' && authService.isAuthenticated()) {
      return router.push({ name: from.name }) // vraca na stranicu gde si bio pre klika
  }

  next()
})
