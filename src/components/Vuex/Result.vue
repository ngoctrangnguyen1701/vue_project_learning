<template>
  <!-- <p>Result: {{$store.state.count}}</p> -->
  <p>Result: {{count}}</p>
  <p>{{text}}</p>
</template>

<script>
//có thể dùng computed để lấy cái state, hoặc lấy state trực tiếp ở <template>
//computed luôn chạy trước khi dữ liệu được load
//**khuyên dùng computed, vì dùng cái $store.state không hiển thị được trên Vue dev tool,
//dùng computed nó thì dễ check bug hơn
//reference: https://vuex.vuejs.org/guide/state.html#getting-vuex-state-into-vue-components

import {mapState} from 'vuex'

export default {
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  // computed: mapState([
  //   'count'
  // ])
  //có thể dùng mapState khi mà cái biến được map trong store với tên thuộc tính trong computed giống nhau
  computed: {
    text() {
      return 'Combie with mapState'
    },
    ...mapState([
      'count'
    ])
  }
  //kết hợp dùng chung cả biến trong mapState với biến local của template
}
</script>