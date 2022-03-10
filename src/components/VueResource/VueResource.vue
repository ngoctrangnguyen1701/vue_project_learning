<template>
  <h3 class="text-center my-4">Submit form</h3>
  <form>
    <div class="mt-3">
      <label>Username: </label>
      <input type="text" class="form-control" v-model="username">
    </div>
    <div class="mt-3">
      <label>Password: </label>
      <input type="text" class="form-control" v-model="password">
    </div>
    <button class="btn btn-primary mt-3">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  }
}
</script>