import Vue 		from 'vue';
import App 		from './app.vue';
import router 	from './router/index';
import store 	from './store/index';
import axios 	from './httpClient/axios';

//	css ex: font
import font 	from './font/iconfont.css';

//	httpclient
Vue.prototype.$http = axios;

let root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	router,
	store,
	render: (h)=> h(App)
}).$mount(root)
