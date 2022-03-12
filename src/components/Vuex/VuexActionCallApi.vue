<template>
  <hr>
  <h5 class="d-inline-block me-2">Vuex action call Api</h5>
  <button
    class="btn btn-success"
    @click="getAllProducts"
  >Show all products</button>
  <div
    class="border rounded px-3 pt-2"
    v-if="products.length > 0"
  >
    <p 
      v-for="(item, index) in products"
      :key="index"
    >{{item.title}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['products']),
  },
  methods: {
    getAllProducts() {
      this.$store.dispatch('GET_ALL_PRODUCTS')
    }
  }
}
</script>