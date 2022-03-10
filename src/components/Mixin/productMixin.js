const productMixin = {
  data() {
    return {
      itemList: ['Samsung', 'Apple', 'Nokia', 'Asus', 'Oppo', 'Xiaomi', 'Sony'],
      filterValue: ''
    }
  },
  computed: {
    //gía trị của biến 'itemList' không bị thay đổi
    filterProduct() {
      return this.itemList.filter(item => item.toLowerCase().includes(this.filterValue.toLowerCase()))
    }
  },
  created() {
    console.log('created by product mixin');
  }
}

export default productMixin