import { createApp, onMounted } from 'vue'
import App from './App.vue'
import './main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init()

app.use(AOS).mount('#app')
