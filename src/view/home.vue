<template>
  <div class="home" id="home">
    <nav>
      <img class="log" :src="logSrc" alt="Logo">
      <span class="btns">
        <button class="btn-theme" @click="showPop($event)">注册</button>
        <button class="btn-default" @click="showPop($event)">登录</button>
      </span>
    </nav>
    <header>
      <div class="banner">
        <img :src="banSrc" alt="Banner">  
      </div>
      <div class="tag">
        <h3 class="tag-hd">{{title}}</h3>
        <btn></btn>
      </div>
    </header>
    <section class="input">
      <div class="outer">
        <select name="" id="">
          <option v-for="(item,index) in options" :value="item.value">{{item.name}}</option>
        </select>
      </div>
      <input type="text" placeholder="搜索感兴趣的内容">
      <button class="btn-theme" >搜索</button>
      <span class="tab" id="tab">
        <router-link to="/panel" active-class="active">面板</router-link>
        <router-link to="/list" active-class="active">列表</router-link>
      </span>
    </section>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <popup></popup>
  </div>
</template>

<script>
  import {actions} from '../vuex/store' 
  export default{
    vuex: {
      actions: actions
    },
    components: {
      popup:require('../components/popup'),
      btn:require('../components/btn')
    },
    data(){
      return{
        logSrc: 'https://cn.vuejs.org/images/logo.png',
        banSrc: 'http://htmljs.b0.upaiyun.com/uploads/1478698438615-65e11a061e85c4b9367a6477bb08a6ba.png',
        title: '热点话题',
        options:[
          {value:'1',name:'消息来源1'},
          {value:'2',name:'消息消息来源息来源2'},
          {value:'3',name:'消息来源3'},
          {value:'4',name:'消息来源4'},
        ],
        isActive: true
      }
    },
    created: function(){
      this.isActive =  window.location.hash.indexOf('list')>0 ? false: true;
    },
    methods: {
      showPop: function(e){
        var item = e.target;
        let value = [];
        value.state = true;
        value.title = item.innerHTML;
        actions.showLogin(value);
      },
      enter: function(){}
    },
  }
</script>

<style scoped lang="sass">
  @import '../scss/btn.scss';
  .home{
    max-width: 1200px;
    margin: 0 auto;
    nav{
      padding-top: 2rem;
      margin-bottom: 2rem;
    }
    header{
      display: flex;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid $bColor;
    }
    .log{
      width: 4.5rem;
      height: 4.5rem;
    }
    .btns{
      float: right;
      margin-top: 1rem;
    }
    .banner,.tag{
      flex: 1;
    }
    .banner{
      margin-right: 20px;
      img{
        width: 800px;
      }
    }
    .tag{
      width: 380px;
      background: lighten($lightGrey, 15%);
      padding: 0 1rem;
      h3{
        margin-bottom: 1rem;
        font-size: 1.2rem;
        line-height: 3;
        border-bottom: 1px solid $bColor;
      }
    }
    .input{
      margin-bottom: 1rem;
      .outer{
        position:relative;
        margin-right: .5rem;
        display: inline-block;
        &:after{
          content:'';
          @include rectangle($wid: 38px);
        }
        &:before{
          content:'';
          @include triangle($wid: 10px, $right: 10px, $top: 15px);
        }
      }
      select,input{
        color: $fontColor;
        line-height: 2;
        height: 40px;
        padding: 0 1rem;
        -webkit-appearance: none;
        border: 1px solid $bColor;
        vertical-align: middle;
        outline: none;
      }
      select{
        width: auto;
        max-width: 677px;
        position: relative;
        z-index: 1;
        padding-right: 3rem;
        background: transparent;
      }
      input[type="text"]{
        height: 38px;
        margin-right: .5rem;
      }
      button[class^="btn-"]{
        line-height: 2;
        height: 40px;
        vertical-align: -2px;
      }
      .tab{
        float: right;
        a{
          cursor: pointer;
          display: inline-block;
          border: 1px solid $bColor;
          line-height: 2rem;
          padding: 0 1rem;
          outline: none;
          &:active,&.active{
            color: $white;
            background: $themeColor;
          }
        }
      }
    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>