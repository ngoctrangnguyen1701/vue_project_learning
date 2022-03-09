<template>
  <div>
    <input
      type="text"
      :value="test"
      @input="$emit('update:test', $event.target.value)"
    >
    <p>{{test}}</p>
  </div>
</template>

<script>
//kết hợp giữa emit với v-model để lấy dữ liệu từ ô input trong component con
// https://vuejs.org/guide/components/events.html
export default {
  props: {
    test: String
  }
}
</script>