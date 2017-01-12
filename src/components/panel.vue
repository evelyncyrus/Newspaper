<template>
  <div class="kit-panel" id="panel">
    <div class="panel" v-for="(item, index) in panels">
      <h3 :class="item.class">{{item.title}}</h3>
      <div class="panel-bd">
        <p>{{item.article}}</p>
        <span class="link-more">
          <router-link :to="{name:'detail', params: { userId: item.link }}">查看更多>></router-link>
        </span> 
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        panels:[
          {class:'hd-success',title:'成功颜色面板',article:'哈哈哈哈哈',link:'1'},
          {class:'hd-danger',title:'危险颜色面板',article:'西哦系哦系哦系哦系哦哈',link:'2'},
          {class:'hd-warm',title:'警告颜色面板',article:'呵呵呵呵呵呵',link:'3'},
          {class:'hd-default',title:'默认颜色面板',article:'哈嘻嘻嘻嘻嘻嘻嘻嘻',link:'4'},
          {class:'hd-theme',title:'主题颜色面板',article:'哈哈哈哈哈恍恍惚惚哈哈哈哈哈恍恍惚惚哈哈哈哈哈恍恍惚惚哈哈哈哈哈恍恍惚惚',link:'5'},
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  @import  '../scss/panel.scss'
</style>