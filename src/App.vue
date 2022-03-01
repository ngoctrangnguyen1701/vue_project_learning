<script>
import MyComponent from './components/MyComponent.vue'

//vì đã tạo global component là <contract-component>  nên có thể sử dụng trong bất cứ template(component) nào mà không cần import 
</script>

<template>
  <MyComponent message="Hello Vietnam"/>
  <MyComponent message="Xin chao Viet Nam"/>
  <MyComponent message="My Component"/>
  <contract-component/>
</template>


<style>
  @import './assets/base.css';
  h1{
    color: white;
  }
</style>