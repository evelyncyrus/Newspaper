<template>
  <div class="detail" id="detail">
    <h3 class="art-title">{{title}}</h3>
    <p class="art-info">
      <span class="time">{{time}}</span>
      <span class="author">{{author}}</span>
      <a :href="link" class="origin">{{origin}}</a>
    </p>
    <section class="contain">
      <div class="main">{{main}}</div>
      <div class="links">
        <h5 class="relative">相关文章</h5>
        <ul class="arts">
          <li v-for="item in arts" class="art">
            <a :href="item.link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </section>
    <remark></remark>
  </div>
</template>


<script>
  import Remark from './remark';
  export default{
    components: {Remark},
    data(){
      return{
        title:'GOlang在京东列表页实践总结',
        time:'2015-08-31',
        author: '张洪涛',
        link:'http://www.bing.com',
        origin:'Go中国',
        main: '全量数据，搜索结果不理想；全量数据，搜索结果不理想；全量数据，搜索结果不理想；',
        arts:[
          {link:'https://www.baidu.com',title: 'Python的GIL是什么鬼，多线程性能究竟如何'},
          {link:'https://www.baidu.com',title: '哈哈哈哈哈'},
          {link:'https://www.baidu.com',title: '哈哈哈哈哈'},
          {link:'https://www.baidu.com',title: '哈哈哈哈哈'}
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../../scss/detail.scss';
</style>


