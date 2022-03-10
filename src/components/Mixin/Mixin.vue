<template>
  <h3 class="mt-3">Filter products</h3>
  <input class="form-control mt-2 mb-3" v-model="filterValue">
  <div class="border rounded">
    <ul class="mb-0">
      <li 
        v-for="(item, index) in filterProduct"
        :key="index"
        class="my-2"
      >{{item}}</li>
      <p v-if="filterProduct.length === 0" class="my-2">No item</p>
    </ul>
  </div>
  <button class="btn btn-success mt-2" @click="itemList.push('New item')">
    Add item
  </button>

  <ListComponent/>
</template>

<script>
import ListComponent from './ListComponent.vue'
import productMixin from './productMixin'

// ***mixin giống như 1 component mở rộng trong Vue, có tất cả lifecycle, có khả năng ghi đè
//và được ưu tiên chạy trước,
// những cái làm thay đổi biến của component này sẽ không ảnh hưởng đến component dùng chung mixin
//tưởng tượng mixin giống như là 1 công cụ, component nào cũng có thể sử dụng chung bộ công cụ đó
//nhưng tùy từng khả năng khác nhau mà tạo ra sản phẩm khác nhau

export default {
  mixins: [productMixin],
  // data() {
  //   return {
  //     itemList: ['Samsung', 'Apple', 'Nokia', 'Asus', 'Oppo', 'Xiaomi'],
  //     filterValue: ''
  //   }
  // },
  // computed: {
  //   //gía trị của biến 'itemList' không bị thay đổi
  //   filterProduct() {
  //     return this.itemList.filter(item => item.toLowerCase().includes(this.filterValue.toLowerCase()))
  //   }
  // },
  components: {
    ListComponent,
  },
  created() {
    console.log('created by Mixin.vue');
  }
}
</script>