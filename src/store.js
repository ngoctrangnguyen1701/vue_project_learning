import { createStore } from "vuex";
import moduleProduct from './modules/moduleProduct.js'
import moduleTodo from './modules/moduleTodo.js'

//**cái devtool của Vue 3 chưa có hỗ trợ check bug cho vuex 4
//layout nào sử dụng biến 'count' khi biến 'count' có sự thay đổi, sẽ render lại
const store = createStore({
  modules: {
    moduleProduct,
    moduleTodo,
  },
})

export default store