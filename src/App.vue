<template>
  <div id="app">
    <router-view></router-view>
    <div>asdf<div>
    <div class="">
      <footer>
        <Bottom />
      </footer>
    </div>
  </div>
</template>

<script>
//import Home from './component/Home.vue'
//import Admin from './component/Addim.vue'
import Bottom from './components/Bottom.vue'


export default {
  name: 'app',
  data(){
    return{

    }
  },
  components: {

    Bottom
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
  width:80%;
  margin:0 auto;

}
</style>
