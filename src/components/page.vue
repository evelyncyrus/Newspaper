<template>
  <section class="page" id="page">
    <span class="total-num">共{{total}}页</span>
    <button class="home-num btn-default" @click="firstBtn">{{home}}</button>
    <button class="reduceBtn btn-default" @click="reduceBtn">{{reduce}}</button>
    <span class="num">
      <span v-for="(item, index) in items" :class="item.class" @click="pageBtn(index)">{{item.page}}</span>
    </span>
    <button class="addBtn btn-default" @click="addBtn">{{add}}</button>
    <button class="last-num btn-default" @click="lastBtn">{{last}}</button>
  </section> 
</template>


<script>
  export default{
    data(){
      return{
        init: 1,
        reduce: '<',
        add:'>',
        total:'5',
        home:'首页',
        last:'尾页',
        items:[
          { page: 1 , class:'btn-theme'},
          { page: 2 , class:'btn-default'}
        ]
      }
    },
    methods:{
      firstBtn: function(){
          this.items[0].page = 1;
          this.items[0].class = 'btn-theme';
          this.items[1].page = 2;
          this.items[1].class = 'btn-default'; 
      },
      lastBtn: function(){
          this.items[0].page = this.total - 1;
          this.items[0].class = 'btn-default'; 
          this.items[1].page = this.total;
          this.items[1].class = 'btn-theme';
      },
      addBtn: function(){
        var firstNum = this.items[0].page;
        var LastNum = this.items[1].page;
        if(LastNum < this.total ){
          this.items[0].page = firstNum + 1;
          this.items[1].page = LastNum + 1;
        } else if (LastNum == this.total){
          this.items[0].class = 'btn-default';
          this.items[1].class = 'btn-theme';
        }
      },
      reduceBtn: function(){
        var firstNum = this.items[0].page;
        var LastNum = this.items[1].page;
        if( firstNum > 1){
          this.items[0].page = firstNum - 1;
          this.items[1].page = LastNum - 1;
        }else if( firstNum == 1){
          this.items[0].class = 'btn-theme';
          this.items[1].class = 'btn-default';
        }
      },
      pageBtn: function(index){
        for(var i = 0; i<this.items.length; i++){
          this.items[i].class= 'btn-default';
        }
        this.items[index].class= 'btn-theme';
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../scss/btn';
  .page{
    [class*="btn-"]{
      font-size: .8rem;
      line-height: 1.2rem;
      padding: 0 .5rem;
    }
    .num span{
      cursor: pointer;
    }
    .num span:first-child{
      margin-right: .5rem;
    }
  }
</style>