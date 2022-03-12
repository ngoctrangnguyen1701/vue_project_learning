import { createStore, createLogger  } from "vuex";
import moduleProduct from './modules/moduleProduct.js'
import moduleTodo from './modules/moduleTodo.js'

//**cái devtool của Vue 3 chưa có hỗ trợ check bug cho vuex 4
//layout nào sử dụng biến 'count' khi biến 'count' có sự thay đổi, sẽ render lại
const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  modules: {
    moduleProduct,
    moduleTodo,
  },
  state() {
    return {
      count: 0
    }
  },
  mutations: { //mutations (các sự thay đổi)
    updateCount(state, value) {
      console.log('updateCount: ', value)
      state.count += value
    },
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store