<template>
  <form style="flex-grow: 1; margin-left: 15px">
    <input type="text" placeholder="name" @input="changeName">
    <ShowName :name="name"/>
  </form>
</template>

<script>
import ShowName from './ShowName.vue'

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    changeName(e){
      console.log(e);
      console.log(e.target.value);
      this.name = e.target.value;
    }
  },
  components: {
    ShowName,
  }
}
</script>