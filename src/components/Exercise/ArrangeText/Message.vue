<template>
  <span
    class="d-block ms-3"
    :style="!message ? 'visibility: hidden' : 'visibility: visible'"
  >{{message}}</span>
</template>

<script>
  export default {
    props: ['message'],
  }
</script>

<style scoped>
  span {
    min-width: 300px;
    min-height: 35px;
    padding-top: 10px;
    transition: .3s;
  }
</style>