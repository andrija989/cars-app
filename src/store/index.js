import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './auth_module.store'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    AuthModule
  }
})

export default store
