<template>
  <button
    class="btn btn-success mt-2"
    @click="$store.state.count++"
  >Increment</button>
  <button
    class="btn btn-success ms-2 mt-2"
    @click="$store.state.count--"
  >Decrement</button>
  <button
    class="btn btn-warning ms-2 mt-2"
    @click="$store.commit('updateCount', 1)"
  >Mutation Increment</button>
  <button
    class="btn btn-warning ms-2 mt-2"
    @click="$store.commit('updateCount', -1)"
  >Mutation Decrement</button>
</template>

<script>
//có 2 cách dùng để thay đổi state trong store
//có thể thay đổi trực tiếp ở <template>
//hoặc sử dụng $store.commit
//**khuyên dùng $store.commit vì như vậy code sẽ trở nên rõ ràng hơn,
//tiện cho việc sử dụng tool để check bug
export default {

}
</script>