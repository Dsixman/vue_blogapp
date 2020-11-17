import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router.js'
import store from './store/store.js'
import './assets/style/global.css'
import '../node_modules/normalize.css/normalize.css'
import VueAxios from 'vue-axios'
import Axios from 'axios'
Vue.use(VueAxios,Axios)
//import 'element-ui/lib/theme-chalk/index.css';
import {Row,Col,Menu,MenuItem,Submenu,Input,Calendar} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Input)
Vue.use(Calendar)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
