<template>
  <div>
    <nav>
      <router-link class="btn btn-primary" to="/cars">Cars</router-link>
      <router-link class="btn btn-primary" to="/add">Add Car</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  
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
