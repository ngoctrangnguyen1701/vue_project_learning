<template>
  <h3 class="mt-3">Filter products from list component</h3>
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
</template>

<script>
import productMixin from './productMixin'

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
  // }
  created() {
    console.log('created by List Component');
  }
}
</script>