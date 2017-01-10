import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router/dist/vue-router.js'

Vue.use(VueRouter);

const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
    '/': Home,
    '/about': About
}
new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})

//开启debug模式
// Vue.config.debug = true;

// 创建一个路由器实例
// const router = new VueRouter({
//     routes: [
//         { path: '/panel', component: Panel },
//         { path: '/list', component: List },
//     ],
//     // catch all redirect
//     // { path: '*', redirect: '/' }
// });


// 路由器会创建一个 App 实例，并且挂载到选择符 #tab 匹配的元素上。
// const app = new Vue({
//     router
// }).$mount('#tab');