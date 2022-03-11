import { createStore } from "vuex";

//layout nào sử dụng biến 'count' khi biến 'count' có sự thay đổi, sẽ render lại
const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    updateCount(state, value) {
      console.log('updateCount: ', value);
      state.count += value
    }
  }
})

export default store