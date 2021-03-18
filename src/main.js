import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import * as moment from 'moment';
import router from './routes';
import store from './store';
import Loading from '@/components/loading/loading';

Vue.prototype.$moment = moment;

Vue.use(Loading);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
