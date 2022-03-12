<template>
  <hr>
  <div class="row">
    <div class="my-3 col-md-6">
      <h3 class="d-inline-block tex-center">Todos</h3>
      <select class="ms-2" v-model="status">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not done</option>
      </select>
      <ul>
        <li 
          v-for="(item, index) in todos"
          :key="index"
        >{{item.text}}</li>
      </ul>
    </div>

    <div class="my-3 col-md-6">
      <h3 class="d-inline-block tex-center">Get Todo by id</h3>
      <select class="ms-2" v-model="id">
        <option
          v-for="(item, index) in originalTodos"
          :key="index"
          :value="item.id"
        >{{item.id}}</option>
      </select>
      <ul class="w-100">
        <li v-if="getTodoById.text">{{getTodoById.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  data() {
    return {
      status: 'all',
      // todos: [],
      getTodoById: {
        text: ''
      },
      id: '',
    }
  },
  // computed: mapState([
  //   'todos'
  // ]),
  computed: {
    ...mapState({
      // todosFromMapState: 'todos'
      //có thể đổi tên trong map
    }),
    // ...mapGetters([
    //   'doneTodos',
    //   'notDoneTodos'
    // ]),
    ...mapGetters({
      doneTodos: 'doneTodos',
      notDoneTodos: 'notDoneTodos',
      todosFromMapState: 'todos'
    }),
    todos() {
      // return this.$store.state.todos
      // console.log('filter status');
      // console.log(this.status);
      if(this.status === 'done') {
        // console.log(this.$store.getters.doneTodos);
        // console.log(this.todos);
        // return this.$store.getters.doneTodos
        return this.doneTodos
      }
      else if(this.status === 'notDone') {
        // return this.$store.getters.notDoneTodos
        return this.notDoneTodos
      }
      // return this.$store.state.todos
      return this.todosFromMapState
    },
    originalTodos() {
      // return this.$store.state.todos
      return this.todosFromMapState
    },
  },
  watch: {
    id(newValue) {
      console.log('id: ', newValue);
      this.getTodoById = this.$store.getters.getTodoById(newValue)
    }
  }
}
</script>