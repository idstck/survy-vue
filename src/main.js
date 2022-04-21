import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';

import './index.css';
import { useAuth } from './store/auth';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';


(async () => {
    const store = createPinia();
    const app = createApp(App);

    app.use(store);
    
    const auth = useAuth();
    await auth.getUser();

    app.use(router);
    app.mount('#app');
})();
