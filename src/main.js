import Vue from 'vue'
import BootstrapVue, { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/css/main.css'
import axios from 'axios'
import VBHover from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(axios)
Vue.component(CarouselPlugin)
Vue.use(VBHover)

new Vue({
  render: h => h(App),
}).$mount('#app');
