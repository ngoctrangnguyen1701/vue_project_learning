<template>
  <h3>Vue router product</h3>
  <button class="btn btn-warning me-2" @click="backToHome">Back to home</button>
  <router-link to='/vue-router-product/detail/1'>
    <button class="btn btn-primary me-2">Product detail 1</button>
  </router-link>
  <router-link to='/vue-router-product/edit/1'>
    <button class="btn btn-primary me-2">Product edit 1</button>
  </router-link>
  <router-link to='/vue-router-product/detail/2'>
    <button class="btn btn-primary me-2">Product detail 2</button>
  </router-link>
  <router-link to='/vue-router-product/edit/2'>
    <button class="btn btn-primary">Product/edit 2</button>
  </router-link>
  <router-view/>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push('/vue-router')
      //có thể dùng cú pháp này để đẩy qua 1 url khác
    }
  }
}
</script>