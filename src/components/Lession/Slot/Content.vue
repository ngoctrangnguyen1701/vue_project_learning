<template>
  <div>
    <h4>CardHeader</h4>
    <slot name="header"/>
    <!-- thẻ <slot> mà Vuejs cung cấp dùng để giữ chỗ 
      để nhét những cái nằm bên trong cặp thẻ xuất ra bên ngoài ở bên ngoài vào chỗ để chữ 'slot',
      tương tự với cái gọi là props.chidren trong react
      -->
  </div>
  <div>
    <h4>CardBody</h4>
    <slot/>
    <!-- thẻ slot nếu không có đặt tên,
    sẽ lấy default toàn bộ các phần chính giữa không có được định nghĩa tên slot ở bên ngoài -->
  </div>
  <div>
    <h4>CardFooter</h4>
    <slot name="footer"/>
  </div>
</template>

<style scoped>
  div{
    border: 1px solid palevioletred;
    padding: 15px 0;
    text-align: center;
  }
</style>