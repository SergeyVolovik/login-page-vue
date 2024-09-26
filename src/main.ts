import { registerPlugins } from '@/plugins';
import { createApp } from 'vue';
import App from './App.vue';

import 'primeicons/primeicons.css';
import 'vue3-toastify/dist/index.css';
import './style.css';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
