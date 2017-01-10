<template>
  <div class="home" id="home">
    <nav>
      <img class="log" :src="logSrc" alt="Logo">
      <span class="btns">
          <button class="btn-theme">{{btn1}}</button>
          <button class="btn-default">{{btn2}}</button>
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
      <select name="" id="">
        <option v-for="(item,index) in options" :value="item.value">{{item.name}}</option>
      </select>
      <input type="text" placeholder="搜索感兴趣的内容" @input="selVal">
      <button class="btn-theme" >搜索</button>
      <span class="tab" id="tab">
        <router-link to="/panel" active-class="active">面板</router-link>
        <router-link to="/list" active-class="active">列表</router-link>
      </span>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
  import Btn from '../btn.vue'

  export default{
    data(){
      return{
        logSrc: 'https://cn.vuejs.org/images/logo.png',
        btn1: '注册',
        btn2: '登录',
        banSrc: 'http://htmljs.b0.upaiyun.com/uploads/1478698438615-65e11a061e85c4b9367a6477bb08a6ba.png',
        title: '热点话题',
        options:[
          {value:'1',name:'消息来源1'},
          {value:'2',name:'消息来源2'},
          {value:'3',name:'消息来源3'},
          {value:'4',name:'消息来源4'},
        ],
        link:[
          {path:'/panel',objClass:'active',text:'面板'},
          {path:'/list',objClass:'',text:'列表'}
        ],
        isActive: true
      }
    },
    components: { Btn},
    created: function(){
      this.isActive =  window.location.hash.indexOf('list')>0 ? false: true;
    },
    methods: {
      selVal: function(e){
        var item = e.target;
        var val = item.value;
      }
    },
  }
</script>

<style scoped lang="sass">
  @import '../../scss/btn.scss';
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
        font-size: 1.2rem;
        line-height: 3;
        border-bottom: 1px solid $bColor;
      }
    }
    .input{
      position:relative;
      &:after{
        content:'';
        @include rectangle($wid: 38px,$left:100px);
      }
      &:before{
        content:'';
        @include triangle($wid: 10px, $left: 110px,$top: 15px);
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
        width: 140px;
        position: relative;
        z-index: 1;
        background: transparent;
      }
      input[type="text"]{
        height: 38px;
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
</style>