import { createStore } from "vuex";

//**cái devtool của Vue 3 chưa có hỗ trợ check bug cho vuex 4
//layout nào sử dụng biến 'count' khi biến 'count' có sự thay đổi, sẽ render lại
const store = createStore({
  state() {
    return {
      count: 0,
      todos: [
        {
          id: 1,
          text: 'Learn Vue',
          done: true
        },
        {
          id: 2,
          text: 'Learn React',
          done: false
        },
        {
          id: 3,
          text: 'Learn Nodejs',
          done: true
        }
      ],
      products: []
    }
  },
  mutations: { //mutations (các sự thay đổi)
    updateCount(state, value) {
      console.log('updateCount: ', value);
      state.count += value
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(item => item.done === true)
    },
    notDoneTodos(state) {
      return state.todos.filter(item => item.done === false)
    },
    // https://vuex.vuejs.org/guide/getters.html#method-style-access
    //khi muốn sử dụng tham số để truy vấn trong store
    getTodoById: state => id => state.todos.find(item => item.id === id)
  },
  actions: {
    //mutations dùng để chạy đồng bộ, còn actions dùng để chạy bất đồng bộ (vd: gọi api)
    //actions giống như trung gian giữa tương tác người dùng gửi tới
    //sau đó tương tác với api, sau đó mới tương tác với mutation 
    //(hoặc cũng có thể là gọi các action khác)
    incrementAsync(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateCount', 1)
        //commit gọi đến mutation 'updateCount' của store
      }, 2000)
    },
    GET_ALL_PRODUCTS({state}) {
      console.log('GET_ALL_PRODUCTS')
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(state);
          console.log(state.products);
          state.products = [...data] //clone ra 1 mảng mới để vuex nhận thấy sự thay đổi của mảng
        })
        .catch(error => console.log(error)) 
    }
  },
})

export default store