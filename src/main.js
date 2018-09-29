/* eslint-disable*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import {store} from './store'

Vue.use(VeeValidate)
Vue.use(Vuex)
Vue.use(axios)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)

library.add(fas.faCoffee, fas.faShoppingCart, fas.faUserCircle, fas.faCompass, fas.faBoxOpen, fas.faQuestion, fas.faMobileAlt, fas.faTruck
  , fas.faMobile, fas.faArrowAltCircleRight, fab.faFacebook, fab.faInstagram, fab.faTwitter, fab.faGooglePlus, fab.faYoutube
  , fas.faHome, fas.faCaretSquareDown, fas.faBars, fas.faLaptop, fas.faKey, fas.faTshirt, fas.faPaintRoller, fas.faHeart
  , fas.faUser, fas.faFileContract, fas.faQuestionCircle, fas.faTimes, fas.faFilter, fas.faSortAmountDown, fas.faSearch, fas.faArrowRight,
  fas.faShare, fas.faTrash, fas.faPlusSquare, fas.faMinusSquare, fas.faArrowLeft
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// add cordova.js only if serving the app through fileif (window.location.protocol === 'file:' || window.location.port === '3000') {
var cordovaScript = document.createElement('script')
cordovaScript.setAttribute('type', 'text/javascript')
cordovaScript.setAttribute('src', 'cordova.js')
document.body.appendChild(cordovaScript)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
