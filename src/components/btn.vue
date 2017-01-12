<template>
  <div id="btn">
    <a :href="item.href" v-for="(item, index) in btns" :class="item.classObj" @click="btnClick(index)">{{item.name}}</a>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        btns:[
          {classObj:{
            'btn-success':true,
            'disable': false
          },
          href:'javascript:void(0);',
          name:'JAVASCRIPT'},
          {classObj:{
            'btn-warm':true,
            'disable': false
          },
          href:'javascript:void(0);',
          name:'PYTHON'},
          {classObj:{
            'btn-default':true,
            'disable': false
          },
          href:'javascript:void(0);',
          name:'Node'},
          {classObj:{
            'btn-theme':true,
            'disable': false
          },
          href:'javascript:void(0);',
          name:'Angular Js'},
          {classObj:{
            'btn-danger':true,
            'disable': false
          },
          href:'javascript:void(0);',
          name:'Vue js'}
        ]
      }
    },
    methods:{
      btnClick: function(index){
        var isDisable = this.btns[index].classObj.disable;
        if(isDisable== false){
          this.btns[index].classObj.disable = true;
        }else{
          this.btns[index].classObj.disable = false;
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../scss/btn.scss';
  a[class^="btn-"]{
    cursor: pointer;
    line-height: 1.8rem;
    margin: 0 1rem 1rem 0;
  }
</style>