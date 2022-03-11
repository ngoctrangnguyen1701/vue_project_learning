import { createStore } from "vuex";

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
      ]
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

})

export default store