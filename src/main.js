import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'

const routes = [
  { path:'/', redirect:'/cars'},
  { path:'/cars', component:AppCars},
  { path:'/add', component:AddCar}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
