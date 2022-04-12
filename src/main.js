import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';

import './index.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';

const app = createApp(App);
const store = createPinia();

app.use(router).use(store).mount('#app');
