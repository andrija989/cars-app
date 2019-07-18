<template>
  <div>
    <nav>
      <router-link class="btn btn-primary" to="/cars">Cars</router-link>
      <router-link class="btn btn-primary" to="/add">Add Car</router-link>
      <router-link class="btn btn-primary" to="/register">Register</router-link>
      <li v-if="user">
        <button @click="logout()">Logout</button>
      </li>
      <li v-else>
        <router-link to="/login">Login</router-link>
      </li>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { authService } from '@/services/Auth'
import { mapGetters } from 'vuex'

export default {
  data() {
      return {
        // isAuthenticated: false,
        
      }
    },

    methods: {
      logout() {
        authService.logout()
        this.isAuthenticated = false
      }
    },

    computed: {
      ...mapGetters({
          user:'getUser'
        })
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
