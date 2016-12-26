 <template>
  <div class="pop" id="pop">
    <button @click="showPop" class="btn-default">{{msg}}</button>
    <div class="pop-panel" :style="{display: displayState}">
      <div class="pop-hd">
        <h3>{{msg}}</h3>
        <span class="pop-close" @click="closePop">x</span>
      </div>
      <div class="pop-bd">
        <div v-for="item in items" class="pop-item">
          <input :type="item.type" :class="item.class" :placeholder="item.txt">
        </div>
        <div class="pop-code">
          <input type="text" class="code" :placeholder="code.txt">
          <img :src="code.src" :alt="code.alt" class="vcode" @click="changeImg">
        </div>
        <div class="pop-sub"><button class="btn-theme" id="subBtn" @click="subInfo">{{confir}}</button></div>
      </div>
    </div>
    <div class="pop-mask" :style="{display:displayState}"></div>
  </div>
 </template>

 <script>
   export default{
     data(){
      return{
        displayState: "none",
        msg: "注 册",
        items: [
          {type:'text',class:'name',txt:'请输入手机号或邮箱'},
          {type:'text',class:'password',txt:'请输入6位以上的英文或数字密码'},
          {type:'text',class:'rekey',txt:'请确认密码'}
        ],
        code: {
          txt:'验证码',
          src:'',
          alt:'图片验证码'
        },
        confir: '提 交'
      }
     },
     methods:{
       showPop: function(){
         this.displayState = 'block';
       },
       closePop: function(){
         this.displayState = 'none';
       },
       changeImg: function(){
         this.code.src = '';
       },
       subInfo: function(){
       }
     }
   }
 </script>


<style scoped lang="sass">
  @import '../scss/btn';
  .pop{
    .pop-mask{
      @include pos($type:fixed,$transform:none,$top:0,$left:0);
      width: 100%;
      height: 100%;
      z-index:1;
      background: rgba($black,.75);
    }
    .pop-hd{
      text-align: center;
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
      top: -1.5rem;
      right: -1rem;
    }
    .pop-panel{
      z-index: 2;
      padding: 2rem;
      border-radius: .3rem;
      @include pos;
      width: 500px;
      background: rgba($white,.9);
      input{
        @include iptCss($height:2rem);
      }
    }
    .pop-item{
      width:100%;
      margin-bottom: 1rem;
    }
    .pop-code{
      @include pos($type:relative,$top:0,$left:0,$transform:none);
      .vcode{
        @include pos($type:absolute,$left:initial,$top:0,$transform:none);
        right: 0;
        line-height: 1.8rem;
      }
    }
    .pop-sub{
      margin-top: 2rem;
      text-align: center;
    }
  }
</style>

