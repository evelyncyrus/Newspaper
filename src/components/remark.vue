<template>
  <section id="remark" class="remark">
    <h3 class="sec">评论</h3>
    <list></list>
    <page></page>
    <p class="signin">
      <span class="hint" v-if="signed">游客身份？<a href="sign">点此登录</a></span>
      <span class="hint" v-else>您的想法</span>
      <p class="word">
        <textarea v-if="empty" name="remarkArea" id="" rows="10" >请您输入合法言论...</textarea>
        <textarea v-else name="remarkArea" id="" rows="10">{{words}}</textarea>
        <button class="btn-theme">提交</button>
      </p>
    </p>
  </section>
</template>


<script>  
  import Page from './page';
  import List from './list';
  export default{
    components: {Page,List},
    data(){
      return{
        lists:[
          {tag:'精品1',title:'集合类操作优化经验总结',author:'NickName'},
          {tag:'',title:'集合类操作优化经验总结',author:'作者'},
          {tag:'', title:'集合类操作优化经验总结',author:'作者'},
          {tag:'',title:'集合类操作优化经验总结',author:'作者'}
        ],
        signed: true,
        empty: true,
        words: '哈哈哈哈'
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../scss/mixin.scss';
  @import '../scss/btn.scss';
  .remark{
    margin: 0 3rem;
    padding: 1rem 1.5rem 3rem;
    background: $white;
    .sec{
      font-size: 1.2rem;
      padding: .8rem 0 .5rem;
    }
    .word{
      text-align: center;
      margin-top: 1rem;
      textarea{
        color: $darkerGrey;
        width: 100%;
        padding: .5rem;    
        box-sizing: border-box;
        outline: none;
        margin-bottom: 1.5rem;
      }
      .btn-theme{
        width: 8rem;
      }
    }
  }
  .page{
    text-align: center;
    padding: 1rem 0;
  }
</style>