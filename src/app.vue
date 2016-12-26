<template>
  <div class="message">{{msg}}</div>
</template>
<script>
  export default{
    data(){
      return{
        msg: 'Hello vue!'
      }
    }
  }
</script>
<style>
  .message{
    color:blue;
    font-size: 18px;
    font-weight: bold;
  }
</style>