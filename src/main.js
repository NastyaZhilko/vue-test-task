import 'bootstrap/dist/css/bootstrap.css'
import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import router from "@/router";
import components from '@/components/shared/UI'
import './assets/fonts/font.css'
import "./assets/styles/common.css";

const app = createApp(App)
components.forEach(component => app.component(component.name, component))

app.use(router)
    .mount('#app')

