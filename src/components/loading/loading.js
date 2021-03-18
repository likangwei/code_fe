/*
* author: the.one
*
* time: 2021-01-27
*
* desc: loading
*
* */
import LoadingComponents from './loading.vue';

let Loading = {};
Loading.installed = false;
Loading.install = (Vue) => {
    if (Loading.installed) return;
    Vue.prototype.$loading = {};
    Vue.prototype.$loading.show = () => {
        if (document.querySelector('#vue-loading')) return;
        let LoadingTip = Vue.extend(LoadingComponents);
        let tpl = new LoadingTip().$mount().$el;
        document.body.appendChild(tpl);
        document.querySelector('#vue-loading').addEventListener('touchmove', function (e) {
            e.stopPropagation()
            e.preventDefault()
        });
        Loading.installed = true;
    }
    Vue.prototype.$loading.hide = () => {
        let tpl = document.querySelector('#vue-loading');
        if(tpl) document.body.removeChild(tpl);
    }
}

export default Loading;
