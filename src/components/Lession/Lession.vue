<template>
  <h1 style="color: red">Lession</h1>
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
  <hr/>
  <EventBus/>
  <hr/>
  <Slot/>
  <hr/>
  <ToggleComponents/>
</template>

<script setup>
  // Bởi vì setup thực thi trước component được tạo, trong setup sẽ không có this
  // reference: https://viblo.asia/p/tim-hieu-ve-composition-trong-vuejs-bWrZnVQOZxw
  //nếu khai báo component từ bên ngoài vào trong script setup
  //thì không cần phải viết thêm cái property 'components' trong export default
  import MyComponent from './MyComponent.vue'
  import StyleForComponent from './StyleForComponent/StyleForComponent.vue'
  import Property from './Props(property)/Property.vue'
  import EventBus from './EventBus/EventBus.vue'
  import Slot from './Slot/Slot.vue'
  import ToggleComponents from './ToggleComponents/ToggleComponents.vue'
</script>