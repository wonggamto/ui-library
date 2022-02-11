import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Demo from './components/Demo.vue';
import Demo1 from './components/Demo1.vue';

const history = createWebHashHistory();
const router = createRouter({
  history, routes: [
    {path: '/', component: Demo},
    {path: '/xxx', component: Demo1}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
