<template>
  <MyComponent message="Hello Vietnam"/>
  <MyComponent message="Xin chao Viet Nam"/>
  <MyComponent message="My Component"/>
  <contract-component/>
  <!-- vì đã tạo global component là <contract-component>  nên có thể sử dụng trong bất cứ template(component) nào mà không cần import  -->
  <hr/>
  <style-for-component/>
  <!-- Vue nó tự complie các cách đặt tên của component -->
  <hr/>
  <Property/>
</template>

<script setup>
  import MyComponent from './components/MyComponent.vue'
  import StyleForComponent from './components/StyleForComponent/StyleForComponent.vue'
  // Bởi vì setup thực thi trước component được tạo, trong setup sẽ không có this
  // reference: https://viblo.asia/p/tim-hieu-ve-composition-trong-vuejs-bWrZnVQOZxw
  //nếu khai báo component từ bên ngoài vào trong script setup
  //thì không cần phải viết thêm cái property 'components' trong export default
  import Property from './components/Props(property)/Property.vue'
</script>


<script>
  // import MyComponent from './components/MyComponent.vue'

  // export default {
  //   components: {
  //     'MyComponent': MyComponent
  //   }
  // }
</script>




<style>
  @import './assets/base.css';
  body{
    margin-left: 15px;
    color: white;
  }
  h1{
    color: white;
  }
</style>