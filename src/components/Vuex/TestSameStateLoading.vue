<template>
  <div class="d-flex">
    <h3 class="me-3">Test same state loading</h3>
    <div class="spinner-border text-info" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['loading'])
}
</script>