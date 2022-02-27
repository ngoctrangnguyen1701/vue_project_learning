<script setup>

defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<script>
  export default {
    data: function(){
      return {
        test: 'white',
        isRed: false
      }
    },
    methods: {
      changeColor: function() {
        this.isRed = !this.isRed
        this.test = this.isRed === true ? 'red' : 'white'
      }
    }
  }
</script>

<template>
  <h1 :style="{color: test}">{{message}}</h1>
  <button @click="changeColor">color: {{test}}</button>
</template>