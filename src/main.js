// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import LangStorage from './helpers/lang'
import ConfigFile from './../static/config/default-config'

Vue.use(VueAxios, axios)
Vue.use(VueI18n)
Vue.use(ConfigFile)
Vue.prototype.$config = ConfigFile

const i18n = new VueI18n({
  locale: LangStorage.getLang('en'),  // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App}
})
