import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Clipboard from "v-clipboard"
import { MotionPlugin } from '@vueuse/motion'
import AOS from "aos"
import "aos/dist/aos.css"

const app = createApp(App)

app.use(router)
app.use(Clipboard)
app.use(MotionPlugin)
AOS.init();
app.mount('#app')

