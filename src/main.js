import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import videoPlayer from "vue-video-player"
import "video.js/dist/video-js.css"
import "vue-video-player/src/custom-theme.css"
Vue.use(videoPlayer)
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
