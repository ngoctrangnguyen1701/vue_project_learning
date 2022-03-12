const module = {
  state: () => ({
    products: [],
    originalProducts: [],
    loading: false,
  }),
  getters: {
    countOriginalProducts(state) {
      return state.originalProducts.length
    },
    products: state => state.products,
    // products(state) {
    //   return state.products
    // }
    // 2 cách ghi tương đương nhau,
    loading: state => state.loading
  },
  actions: {
    GET_ALL_PRODUCTS({state}) {
      console.log('GET_ALL_PRODUCTS')
      if(state.products.length === 0) {
        //kiểm tra nếu chưa có product (tương đương length = 0) mới call api
        state.loading = true
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            console.log(state)
            console.log(state.products)
            state.loading = false
            state.products = [...data] //clone ra 1 mảng mới để vuex nhận thấy sự thay đổi của mảng
            state.originalProducts = [...data]
          })
          .catch(error => console.log(error)) 
      }
    },
    DELETE_PRODUCT({state}, id) {
      console.log('DELETE_PRODUCT')
      state.products = [...state.products].filter(item => item.id !== id)
    },
    RETURN_ORIGINAL_PRODUCTS({state}) {
      state.products = [...state.originalProducts]
    }
  }
}

export default module