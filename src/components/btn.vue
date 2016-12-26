<template>
  <div class="kit-btn" id="btn">
    <button v-for="(item, index) in btns" :class="item.classObj" @click="btnClick(index)">{{item.name}}</button>
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
          }
          ,name:'成功按钮'},
          {classObj:{
            'btn-warm':true,
            'disable': false
          },
          name:'提示按钮'},
          {classObj:{
            'btn-default':true,
            'disable': false
          },
          name:'默认按钮'},
          {classObj:{
            'btn-theme':true,
            'disable': false
          },
          name:'主题按钮'},
          {classObj:
          {
            'btn-danger':true,
            'disable': false
          },
          name:'警告按钮'}
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
  button[class^="btn-"]{
    margin: 0 1rem 1rem 0;
  }
</style>