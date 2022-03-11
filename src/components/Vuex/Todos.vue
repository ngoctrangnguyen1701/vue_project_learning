<template>
  <hr>
  <div class="d-flex my-3">
    <h3 class="tex-center">Todos</h3>
    <select class="d-inline-block ms-2" v-model="status">
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="notDone">Not done</option>
    </select>
  </div>
  <ul>
    <li 
      v-for="(item, index) in todos"
      :key="index"
    >{{item.text}}</li>
  </ul>
  <div class="d-flex my-3">
    <h3 class="tex-center">Get Todo by id</h3>
    <select class="d-inline-block ms-2" v-model="id">
      <option
        v-for="(item, index) in originalTodos"
        :key="index"
        :value="item.id"
      >{{item.id}}</option>
    </select>
  </div>
  <ul>
    <li v-if="getTodoById.text">{{getTodoById.text}}</li>
  </ul>
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
      todosFromMapState: 'todos'
      //có thể đổi tên trong map
    }),
    ...mapGetters([
      'doneTodos',
      'notDoneTodos'
    ]),
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