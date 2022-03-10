<template>
  <p>Product detail {{id}}</p>
</template>

<script>
export default {
  data() {
    return {
      id: ''
    }
  },
  created() {
    console.log('created');
    this.id = this.$route.params.id //lấy param id
  }
}
</script>