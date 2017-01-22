<template>
<div class="pop" id="pop" :load="displayState">
  <div :class="[pClass, {show:isShown}]">
    <div class="pop-hd">
      <h3>{{msg}}</h3>
      <span class="pop-close" @click="closePop">x</span>
    </div>
    <div class="pop-bd">
      <div v-for="(item,index) in items" class="pop-item">
        <input :type="item.type" :class="item.class" :placeholder="item.txt" v-on:blur="updateValue($event.target,index)"  required>
      </div>
      <div class="pop-code">
        <input type="text" class="code" :placeholder="code.txt">
        <img :src="code.src" :alt="code.alt" class="vcode" @click="changeImg">
      </div>
      <div class="pop-sub"><button class="btn-theme" id="subBtn" @click="subInfo">{{confir}}</button></div>
    </div>
  </div>
  <div :class="[mClass, {show:isShown}]"></div>
</div>
</template>

<script>
import store from '../vuex/store.js' 
import {actions} from '../vuex/store.js' 
  export default{
    vuex:{
      actions: actions
    },
    data(){
      return{
        msg: '',
        pClass: 'pop-panel',
        mClass: 'pop-mask',
        items: [
          {type:'text',class:'name',txt:'请输入手机号'},
          {type:'text',class:'password',txt:'请输入6位以上的英文或数字密码'},
          {type:'text',class:'rekey',txt:'请确认密码'},
          {type:'email',class:'mail',txt:'电子邮箱'}
        ],
        code: {
          txt:'验证码',
          src:'',
          alt:'图片验证码'
        },
        confir: '提 交',
        isShown: false
      }
    },
    computed:{
      displayState(){
        this.isShown = store.getters.isShown;
        this.msg = store.getters.popTitle;
        this.items[2].class = this.msg=='登录'? 'rekey hide':'rekey';
      }
    },
    methods:{
      closePop: function(){
        let value = false;
        actions.showLogin(value);
      },
      changeImg: function(){
        this.code.src = '';
      },
      subInfo: function(){
      },
      updateValue: function(item,index){
        var formattedVal = item.value.trim()
        //删除两边空格
        if(index==0){
          if(formattedVal !== item.value&&formattedVal.length<11){
            item.value = formattedVal;
          }else{
            item.value = formattedVal.slice(0,11);
          }
        }else if(index==1){
          if(formattedVal.length>6){
            item.value = formattedVal;  
          }else{
            console.log('密码格式不对')
          }
        }
        this.$emit('input',formattedVal)
      }
    }
  }
</script>


<style scoped lang="sass">
@import '../scss/btn';
.pop{
  .pop-mask{
    display: none;
    @include pos($type:fixed,$transform:none,$top:0,$left:0);
    width: 100%;
    height: 100%;
    z-index:1;
    background: rgba($black,.75);
  }
  .pop-hd{
    text-align: center;
    margin-bottom: 1.5rem;
    h3{
      font-size: 1.5rem;
      line-height: 2rem;
      display: inline-block;
    }
  }
  .pop-close{
    position: relative;
    @include btnRadius($height:1.2rem,$wide:1.5rem);
    font-size: 1.5rem;
    top: -1rem;
    right: -3rem;
    &:hover{
      background: $warmColor;
    }
  }
  .pop-panel{
    display: none;
    z-index: 2;
    padding: 1.5rem 4rem;
    border-radius: .3rem;
    @include pos;
    width: 420px;
    background: rgba($white,.9);
    input{
      @include iptCss($height:2.5rem);
    }
  }
  .pop-item{
    width:100%;
    margin-bottom: .8rem;
  }
  .pop-code{
    @include pos($type:relative,$top:0,$left:0,$transform:none);
    .vcode{
      @include pos($type:absolute,$left:initial,$top:0,$transform:none);
      right: 0;
      height: 2.5rem;
      line-height: 2.4rem;
    }
  }
  .pop-sub{
    margin-top: 1.6rem;
    text-align: center;
    .btn-theme{
      padding: 0 3rem;
    }
  }
  .show{
    display: block;
    animation: show .5s;
  }
  .hide{
    display: none;
  }
  @keyframes show{
    from {opacity: 0},
    to {opacity:1}
  }
  @-webkit-keyframes show{
    from {opacity: 0},
    to {opacity:1}
  }
}
</style>

