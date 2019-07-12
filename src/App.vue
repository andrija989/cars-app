<template>
  <div>
    <nav>
      <router-link class="btn btn-primary" to="/cars">Cars</router-link>
      <router-link class="btn btn-primary" to="/add">Add Car</router-link>
       <router-link class="nav-item nav-link" to="/login" v-if="!isAuthenticated">Login</router-link>
      <a href="#" class="nav-item nav-link" @click="logout" v-if="isAuthenticated">Logout</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { authService } from '@/services/Auth'

export default {
  data() {
      return {
        isAuthenticated: authService.isAuthenticated()
      }
    },

    methods: {
      logout() {
        authService.logout()
        this.isAuthenticated = false
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
