import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faArrowLeft, faCheck, faCheckSquare, faTimes, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import './style/style.styl'

library.add(faChevronRight)
library.add(faArrowLeft)
library.add(faCheck)
library.add(faCheckSquare)
library.add(faTimes)
library.add(faMinusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
