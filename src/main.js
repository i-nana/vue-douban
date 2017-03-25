// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import './assets/less/app.less'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes,
  	// mode: 'history'
})


new Vue({
	router,
	template: '<App/>',
	components: {App}
}).$mount('#app')
