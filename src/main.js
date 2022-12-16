import { createApp } from 'vue'
import './style.css'
import vuetify from "./plugins/vuetify";
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
