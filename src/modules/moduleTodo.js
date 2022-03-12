const module = {
  state() {
    return {
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
    getTodoById: state => id => state.todos.find(item => item.id === id),
    todos: state => state.todos
  },
  actions: {
    //mutations dùng để chạy đồng bộ, còn actions dùng để chạy bất đồng bộ (vd: gọi api)
    //actions giống như trung gian giữa tương tác người dùng gửi tới
    //sau đó tương tác với api, sau đó mới tương tác với mutation 
    //(hoặc cũng có thể là gọi các action khác)
    incrementAsync(context) {
      console.log(context)
      setTimeout(() => {
        context.commit('updateCount', 1)
        //commit gọi đến mutation 'updateCount' của store
      }, 2000)
    },
  },
}

export default module