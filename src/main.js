import Vue from 'vue/dist/vue.js'
import Tab from './components/tab.vue'
import Pop from './components/popup.vue'
import Btn from './components/btn.vue'
import Panel from './components/panel.vue'
import List from './components/list.vue'

var app1 = new Vue({
    el: 'tab',
    components: { Tab }
});

var app2 = new Vue({
    el: 'pop',
    components: { Pop }
})

var app3 = new Vue({
    el: 'btn',
    components: { Btn }
})

var app4 = new Vue({
    el: 'panel',
    components: { Panel }
})

var app5 = new Vue({
    el: 'list',
    components: { List }
})