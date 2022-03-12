<template>
  <hr>
  <TestSameStateLoading/>
  <h5 class="d-inline-block me-2">Vuex action call Api</h5>
  <button
    class="btn btn-success"
    @click="isShowProduct = true"
    v-if="!isShowProduct"
  >Show all products</button>
  <button
    class="btn btn-secondary"
    @click="isShowProduct = false"
    v-else
  >Close</button>
  <button
    class="btn btn-info ms-2"
    @click="RETURN_ORIGINAL_PRODUCTS"
    v-if="isShowBtnReturn"
  >Return original list</button>
  <div class="d-flex justify-content-center mt-3 " v-if="loading">
    <div class="spinner-border text-info">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div
    class="border rounded px-3 pt-2 mt-3"
    v-if="products.length > 0 && isShowProduct"
  >
    <p 
      v-for="(item, index) in products"
      :key="index"
      class="product-item"
    >
      {{item.title}}
      <span
        @click="DELETE_PRODUCT(item.id)"
      >X</span>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import TestSameStateLoading from './TestSameStateLoading.vue'

export default {
  data() {
    return {
      isShowProduct: false,
      isShowBtnReturn: false
    }
  },
  computed: {
    // ...mapState(['products', 'loading']),
    // ...mapGetters(['countOriginalProducts'])
    // ...mapState(['moduleProduct']),
    ...mapState({
      module: 'moduleProduct',
      // products: ['moduleProduct'].products
      // products: this.module.products
    }),
    ...mapGetters(['products', 'loading', 'countOriginalProducts'])
  },
  watch: {
    isShowProduct() {
      if(this.isShowProduct){
        // this.getAllProducts()
        this.GET_ALL_PRODUCTS()
      }
    },
    products(newArr) {
      console.log('products newArr: ', newArr);
      // console.log('products oldArr: ', oldArr);
      if(newArr.length !== this.countOriginalProducts){
        this.isShowBtnReturn = true
      }
      else{
        this.isShowBtnReturn = false
      }
    }
  },
  methods: {
    // getAllProducts() {
    //   this.$store.dispatch('GET_ALL_PRODUCTS')
    // }
    ...mapActions(['GET_ALL_PRODUCTS', 'DELETE_PRODUCT', 'RETURN_ORIGINAL_PRODUCTS'])
  },
  components: {
    TestSameStateLoading,
  }
}
</script>

<style scoped>
.product-item {
  position: relative;
}
.product-item span {
  position: absolute;
  top: 2px;
  right: 2px;

  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: black;
  font-weight: bold;
  
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: red;

  cursor: pointer;
}
</style>