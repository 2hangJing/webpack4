import Vue from 'vue';
import App from './app.vue';
import font from './font/iconfont.css';
import router from './router/index';
import axios from './httpClient/axios';

Vue.prototype.$http = axios;

let root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	router,
	render: (h)=> h(App)
}).$mount(root)
