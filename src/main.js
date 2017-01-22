import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import Home from './view/home.vue'
import Panel from './components/panel.vue'
import List from './components/list.vue'
import Detail from './view/detail.vue'
import VueRouter from 'vue-router/dist/vue-router.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/panel',
        component: Panel
    }, {
        path: '/detail/:userId',
        name: 'detail',
        component: Detail
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/',
        components: Panel
    }]
})

const app = new Vue({
    el: 'home',
    components: { Home },
    router
}).$mount('#home');
