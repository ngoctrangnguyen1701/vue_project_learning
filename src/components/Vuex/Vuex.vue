<template>
  <h3 class="text-center my-3">Vuex</h3>
  <Result/>
  <Control/>
</template>

<script>
import Result from './Result.vue'
import Control from './Control.vue'

export default {
  components: {
    Result,
    Control,
  }
}
</script>