<template>
  <div class="tab" id="tab">
    <ul class="tab-hd">
    <li v-for="(item, index) in items" v-on:click="tabChange(index)" :class="{active: item.isActive}">{{item.title}}</li>
    </ul>
    <section class="tab-bd">{{items[activeIndex].text}}</section>
  </div>
</template>
<script>
  export default{
    data(){ 
      return{
        activeIndex: 0,
        items:[
          {title:'cc', text:'哈哈哈',isActive:true},
          {title:'dd', text:'嘻嘻嘻',isActive:false},
          {title:'mm', text:'呵呵呵',isActive:false},
          {title:'hh', text:'噗噗噗',isActive:false},
        ]
      }
    },
    methods:{
      tabChange:function(index){
        var len = this.items.length;
        this.activeIndex = index;
        for(var i=0;i<len;i++){
          this.items[i].isActive = false;
        }
          this.items[index].isActive = true;
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../scss/mixin.scss';
  .tab {
    overflow: hidden;
    display: inline-block;
    width: 50%;
    background: $lightGrey;
    @include radius;
    ul {
        list-style: none;
    }
    .tab-hd {
      overflow: hidden;
      line-height: 2;
      text-align: center;
      border-bottom: 1px solid $white;
    }
    .tab-hd li{
      color: $white;
      cursor: pointer;
      width: 25%;
      float: left;
      box-sizing: border-box;
      border-right: 1px solid $white;
      &.active{
        background: $warmColor;
      }
      &:last-child{
        border-right: none;
      }
    }
    .tab-bd{
      padding: 1rem;
    }
  }
</style>