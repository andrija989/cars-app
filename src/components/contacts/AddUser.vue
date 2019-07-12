<template>
  <div class="container mt-4">
    <form @submit.prevent="addUser">
      <div class="form-group row">
        <label for="name" class="col-4 col-form-label">Name</label>
        <div class="col-8">
          <div class="input-group">
            <input
              id="name"
              name="name"
              type="text"
              class="form-control here"
              v-model="user.name"
              >
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-4 col-form-label">Password</label>
        <div class="col-8">
          <div class="input-group">
            <input id="password"
                   name="password"
                   type="text"
                   class="form-control here"
                   v-model="user.password">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-4 col-form-label">Email</label>
        <div class="col-8">
          <input
            id="email"
            name="email"
            type="text"
            class="form-control here"
            v-model="user.email">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { authService } from '@/services/Auth'

export default {
  data () {
    return {
      user: {
        name: '',
        password: '',
        email: ''
      },
    }
  },
  
  methods: {
     addUser () {
      authService.register(this.user.name,this.user.password,this.user.email)
      .then(() => {
            this.$router.push('/login')
          })
    }
  }
}
</script>
