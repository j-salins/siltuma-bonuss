import { createApp } from 'vue'
import './style.css'
import vuetify from "./plugins/vuetify";
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import gsap from 'gsap'
import VueSmoothScroll from 'vue3-smooth-scroll'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(gsap)
  .use(VueSmoothScroll)
  .mount('#app')
