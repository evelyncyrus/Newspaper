<template>
  <section id="list">
    <div class="list" v-for="item in lists">
      <router-link :to="{name:'detail',params: {userId:item.id}}" class="list-hd">
        <span class="list-tag">{{item.tag}}</span>
        {{item.title}}
      </router-link>
      <div class="list-bd">
        <span class="bd-lf">{{item.author}}</span>
        <span class="bd-rt">
          <span v-if="star" class="icon-star" @click=""></span>
          <span class="icon-bad" @click=""></span>
          <span class="icon-good" @click=""></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        lists:[
          {tag:'精品',title:'集合类操作优化经验总结',author:'作者',id:'1'},
          {tag:'',title:'集合类操作优化经验总结',author:'作者',id:'2'},
          {tag:'', title:'集合类操作优化经验总结',author:'作者',id:'3'}
        ],
        star: true
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../scss/list';
</style>