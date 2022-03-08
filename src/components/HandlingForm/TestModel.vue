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
export default {
  props: {
    test: String
  }
}
</script>