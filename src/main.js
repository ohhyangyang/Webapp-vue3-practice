import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import './index.css';
import './assets/styles/tailwind.css'

const app = createApp(App);
app.mount('#app');
app.use(createPinia());
