import Vue 		from 'vue';
import App 		from './app.vue';
import router 	from './router/index';
import store 	from './store/index';
import axios 	from './httpClient/axios';
import mavonEditor from 'mavon-editor';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
//	httpclient
Vue.prototype.$hljs = hljs;
//	css ex: font
import './font/iconfont.css';
import 'mavon-editor/dist/css/index.css';
// import 'highlight.js/styles/github.css';


// use
Vue.use(mavonEditor)

//	httpclient
Vue.prototype.$http = axios;

let root = document.createElement('div');
document.body.appendChild(root);

new Vue({
	router,
	store,
	render: (h)=> h(App)
}).$mount(root)
