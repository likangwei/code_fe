import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import * as moment from 'moment';
import router from './routes';
import store from './store';
import Loading from '@/components/loading/loading';
import Highlight from '@/utils/highlight/highlight';
import mavonEditor from 'mavon-editor';


Vue.prototype.$moment = moment;

Vue.use(Loading);
Vue.use(ElementUI);
Vue.use(Highlight);
Vue.use(mavonEditor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
