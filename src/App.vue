<template>
  <div id="app">
    <Home></Home>
    <!-- <router-view></router-view> 这个组件和Home这类页面组件2选一写在这里-->
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
  data(){
    return{

    }
  },
  components: {
    Home
  },
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
