import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)
export const getUser=()=>{
  Vue.axios.get('/api/v1/user')
}
