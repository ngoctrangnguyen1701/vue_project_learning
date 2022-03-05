<template>
  <h3>Contact page</h3>
  <button @click="count++">increase</button>
  <span style="margin-left: 5px">{{count}}</span>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  unmounted(){
    console.log('component Contact is unmounted');
  }
}
</script>