import Vue from 'vue/dist/vue.js'
import Home from './components/home/home.vue'
import Page from './components/page.vue'
import Panel from './components/panel.vue'
import List from './components/list.vue'
import VueRouter from 'vue-router/dist/vue-router.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/panel',
            component: Panel,
        },
        {
            path: '/list',
            component: List,
        },
        {
            path: '/',
            component: Panel
        }
    ]
})

const app = new Vue({
    el: 'home',
    components: { Home },
    router
}).$mount('#tab');


const router2 = new VueRouter({
    routes: [
        { path: '/detail/:actId', component: Home }
    ]
});